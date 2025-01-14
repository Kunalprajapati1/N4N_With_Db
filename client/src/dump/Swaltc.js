
import Swal from 'sweetalert2';
import tnc from "../Data/TnC";
 
const showSwal  =(event)=>{
    event.preventDefault(); 
    
    Swal.fire({
        
        text: tnc.tnc,
        width: 800,
          customclassName: {
            text: "font-Main",
            text: "justify",
            title: "text-2xl font-Main font-bold text-blue-600",
            confirmButton:
              "bg-blue-500 font-Main hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
          },
        // icon: "warning",
        
        confirmButtonColor: "#3085d6",
        
        confirmButtonText: "Accept",
        
      }) 
  }
   
  export default showSwal ;