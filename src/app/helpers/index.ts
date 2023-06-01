export const select = (el:any, all = false) => {
    el = el.trim()
    if (all) {
        return Array.from(document.querySelectorAll(el));
    } else {
        return document.querySelector(el)
    }
}


export const onscroll = (el: any, listener:any) => {
    el.addEventListener('scroll', listener)
}