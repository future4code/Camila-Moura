function longestPrefix(input: string[]): string {
    let prefix = ""
    if(input === null || input.length === 0) return prefix

    for (let i=0; i < input[0].length; i++){ 
        const letter = input[0][i]

        for (let j = 1; j < input.length; j++){ 
            if(input[j][i] !== letter) return prefix
        }
        prefix = prefix + letter
    }
    return prefix
}

