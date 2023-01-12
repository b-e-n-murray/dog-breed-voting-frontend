export function formatBreedname(breedname: string): string{
    if (breedname.includes("/")){
        let breednameArr = breedname.split("/")
        let secondWord = breednameArr[0][0].toUpperCase() + breednameArr[0].slice(1)
        let firstWord = breednameArr[1][0].toUpperCase()+ breednameArr[1].slice(1)
        return `${firstWord} ${secondWord}`
        
        
    }
    return breedname.toUpperCase()
}