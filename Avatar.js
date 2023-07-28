function Avatar({src,width,height,children}) {
    return (
        <>
           <img src={src} width={width} height={height} alt="" />
           {children}
        </>
    )
}
export default Avatar;
