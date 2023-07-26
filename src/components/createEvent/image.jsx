import { useEffect,useState } from "react";


const Image
 = () => {
    const [files, setFiles]=useState();
    const[previews,setPreviews]=useState();
    useEffect(()=>{
        if(!files) return;
        let tmp=[];
        for(let i=0;i<files.length; i++){
            tmp.push(URL.createObjectURL(files[i]));

        }
        const objectsUrls =tmp;
        setPreviews(objectsUrls);
        for (let i=0;i<objectsUrls.length;i++){
            return()=>{
                URL.revokeObjectURL(objectsUrls[i]);
            };
        }
    },[files])
    
    return ( 
        <input type="file"
        accept="image/jpg , image/png , image/jpeg"
        multiple
        onChange={(e)=>{
            if(e.target.files && e.target.files.length>0 ){
                setFiles(e.target.files);
            }
        }} />
     );
}
 
export default Image
;