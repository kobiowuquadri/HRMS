import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { adminRegister } from '../../../API/adminApiCalls'

function AdminRegister() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleRegister = async () => {
    
      await adminRegister({
        email,
        name,
        password
      })
      toast.success("Admin Registration Successfully")
      navigate('/admin-login')
    }


  return (
    <MDBContainer
    id='register_user'
     fluid
     className='d-flex min-vh-100 align-items-center justify-content-center'
   >
     <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
       <MDBCardBody>
         <MDBRow>
           <MDBCol
             md='10'
             lg='10'
             style={{width: "500px"}}
             className='order-2 order-lg-1 d-flex flex-column align-items-center'
           >
             <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
              Admin Sign Up
             </p>
             {/* <form onSubmit={handleRegister}> */}
               <div className='d-flex flex-row align-items-center mb-4'>
                 <MDBIcon fas icon='envelope me-3' size='lg' />
                 <MDBInput
                   label='Your Email'
                   name='email'
                   id='form2'
                   type='email'
                   onChange={(e) => setEmail(e.target.value)}
                   value={email}
                 />
               </div>

               <div className='d-flex flex-row align-items-center mb-4'>
                 <MDBIcon fas icon='lock me-3' size='lg' />
                 <MDBInput
                   label='Your name'
                   name='name'
                   id='form3'
                   type='text'
                   onChange={(e) => setName(e.target.value)}
                   value={name}
                 />
               </div>
               <div className='d-flex flex-row align-items-center mb-4'>
                 <MDBIcon fas icon='lock me-3' size='lg' />
                 <MDBInput
                   label='Password'
                   name='password'
                   id='form3'
                   type='password'
                   onChange={(e) => setPassword(e.target.value)}
                   value={password}
                 />
               </div>

               <MDBBtn
                 className='mb-4'
                 size='lg'
                 style={{ backgroundColor: '#0174BE' }}
                 onClick={handleRegister}
               >
                 Admin Sign Up
               </MDBBtn>
             {/* </form> */}
             <p>Already have an account? <Link to={'/admin-login'}>Admin Login</Link></p>
           </MDBCol>
          
           <MDBCol
             md='10'
             lg='6'
             className='order-1 order-lg-2 d-flex align-items-center'
           >
             {/* <MDBCardImage src={loginBg} fluid /> */}
           </MDBCol>
         </MDBRow>
       </MDBCardBody>
     </MDBCard>
   </MDBContainer>
  )
}

export default AdminRegister