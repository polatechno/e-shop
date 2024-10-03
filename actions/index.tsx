'use server';
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod"

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
];

export async function sellYourItemAction(prevState: any, formData: FormData) {

    const schema = z.object({
        name: z.string().min(4),
        description: z.string().min(10),
        contactEmail: z.string().min(1).email("This is not a valid email address!"),
        price: z.string().min(1),
        imageUrl: z
            .any()
            .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
            .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), "Only .jpg, .jpeg, .png and .webp formats are supported")
    })

    const validatedFields = schema.safeParse({
        name: formData.get("name"),
        description: formData.get("description"),
        price: formData.get("price"),
        imageUrl: formData.get("imageUrl"),
        contactEmail: formData.get("contactEmail")

    });

    if (!validatedFields.success) {
        console.log("Error: ", validatedFields.error)
        return {
            type: "error",
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing fields, Failed to create a Product"
        };
    }

    const { name, description, price, imageUrl, contactEmail } = validatedFields.data;

    try {
        const fileName = Math.random() + "-" + imageUrl.name;

        const supabase = createServerActionClient({ cookies });
        const { data, error } = await supabase.storage.from("storage").upload(fileName, imageUrl, {
            cacheControl: "3600",
            upsert: false
        });

        if (error) {
            return {
                type: "error",
                message: "Database error: Failed to Upload Image",
            }
        }

        if (data) {
            const imagePath = data.path;

            const { data: product } = await supabase.from("products")
                .insert({ name, description, price, imageUrl: imagePath, contactEmail });
        }
    } catch (errors) {
        return {
            type: "error",
            message: "Database error: Failed to create a product",
        }
    }

    revalidatePath("/")
    redirect("/")

}