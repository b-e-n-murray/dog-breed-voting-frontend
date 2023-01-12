export function formatBreedname(breedname: string): string{
    if (breedname.includes("/")){
        const breednameArr = breedname.split("/")
        const secondWord = breednameArr[0][0].toUpperCase() + breednameArr[0].slice(1)
        const firstWord = breednameArr[1][0].toUpperCase()+ breednameArr[1].slice(1)
        return `${firstWord} ${secondWord}`
        
        
    }
    return breedname[0].toUpperCase() + breedname.slice(1)
}