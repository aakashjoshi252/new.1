import Table from "./Table"
export default function Data(){
       return(
            <>
                {formData.map((element,index)=>{
                    <table key={index}>
                        {element.formData}
                    </table>
                })}
            </>
        )
}