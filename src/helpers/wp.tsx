const domain = import.meta.env.VITE_WP_DOMAIN
const apiUrl = `${domain}wp-json/wp/v2`

  

export const getMenuInfo = async (endpoint : string) => {
    const response = await fetch(`${apiUrl}/${endpoint}`)
    if(!response.ok) throw new Error('Failed to fetch menu info')
    

    const data = await response.json()
    
    return data
}

export const getPageInfo = async (slug: string) => {
    const response = await fetch(`${apiUrl}/pages?slug="${slug}"&_fields=acf,title`)
    if(!response.ok) throw new Error('Failed to fetch page info')

    const data = await response.json()
    
    return data
}

export const getPackagesInfo = async (slug: string) => {
    const response = await fetch(`${apiUrl}/planes?slug=${slug}&_fields=acf,title`)
    if(!response.ok) throw new Error('Failed to fetch packages info')
    
    const data = await response.json()
    
    return data
}

export const getPostInfo = async (slug: string) => {
    const response = await fetch(`${apiUrl}/posts?slug=${slug}`)
    if(!response.ok) throw new Error('Failed to fetch packages info')
    
    const data = await response.json()
    
    return data
}

export const getPosts = async () => {
    const response = await fetch(`${apiUrl}/posts`)
    if(!response.ok) throw new Error('Failed to fetch packages info')
    
    const data = await response.json()
    
    return data
}

export const getPackagesCarousel = async () => {
    const response = await fetch(`${apiUrl}/planes?_fields=acf,slug,link,title&per_page=100`)
    if(!response.ok) throw new Error('Failed to fetch packages info')
    
    const data = await response.json()
    
    return data
}

export const getPagePoliticas = async (slug: string) => {
    const response = await fetch(`${apiUrl}/pages?slug="${slug}"&_fields=title,content`)
    if(!response.ok) throw new Error('Failed to fetch page info')

    const data = await response.json()
    
    return data
}