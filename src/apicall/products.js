import { base_url } from "@/base_url"

export const loadProduct =async () =>{
    const res = await fetch(`${base_url}/api/products`)
    const data = await res.json()
    return data
}