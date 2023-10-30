const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

document.getElementByClassAndDataId = function (className, Dataid) {
    var listelement = document.getElementsByClassName(className)

    for (let elmnt of listelement) {
        if (elmnt.dataset.id == Dataid) {
            return elmnt
            break
        }
    }

}
