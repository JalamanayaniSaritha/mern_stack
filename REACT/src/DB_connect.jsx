import React,{useState} from "react";
function DB_connect()
{
    const [FormData,setFormData]=useState({
    name:'',
    email:'',
    message:''
    });
    const [status,setStatus]=useState({
        type:'',
        msg:''
    });
    const [loading,setLoading]=useState(false);
    const handleInputData=(e)=>{
        const {name,value}=e.target;
        setFormData(
            prev=>({
                ...prev,[name]:value
            })
        )
    }
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(True);
        setStatus({
            type:'',
            mgs:''
        });
        try{

        }
        catch(error){
        }
}
export default DB_connect;