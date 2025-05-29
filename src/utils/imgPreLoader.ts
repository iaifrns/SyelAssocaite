export const preLoadeImg = (imgs:string[]): Promise<void> => {
    return new Promise((resolve) => {
        let loaded = 0;

        imgs.forEach(url => {
            const image = new Image();
            image.src = url;
            image.onload = image.onerror = () => {
                loaded++
                if(loaded === imgs.length) resolve();
            }
        })

        if (imgs.length == 0) resolve();
    })
}