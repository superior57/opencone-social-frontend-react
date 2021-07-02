export const getFileType = (strFileName) => {
    let arrFileName = String(strFileName).split(".");
    let extension = arrFileName[arrFileName.length - 1];
    if ( extension === "jpg" || extension === "png" || extension === "jpeg" ) {
        return "image"
    } 
    return "video"
}