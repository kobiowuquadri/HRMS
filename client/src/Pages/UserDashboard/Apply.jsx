import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
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
import { applyForJob } from '../../API/apiCalls'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import bgApply from '../../assets/bg.jpg'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import app from '../../firebase/firebase'



function Apply () {
  const [address, setAddress] = useState('')
  const [resume, setResume] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const [resumePercent, setResumePerecent] = useState(0)

  const navigate = useNavigate()

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setResume(selectedFile);
  };
  

  const uploadFile = (file, fileType) => {
    const storage = getStorage(app)
    // Upload file and metadata to the object 'images/mountains.jpg'

    // Define metadata here
    const metadata = {
      // Add any additional metadata properties you need
      contentType: file.type
    }

    const storageRef = ref(storage, 'resume/' + file.name)
    const uploadTask = uploadBytesResumable(storageRef, file, metadata)

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      snapshot => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        fileType === 'resumeUrl' ? setResumePerecent(Math.round(progress)) : ''
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
        }
      },
      error => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break
          case 'storage/canceled':
            // User canceled the upload
            break

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          console.log('File available at', downloadURL)
        })
      }
    )
  }

  useEffect(() => {
    resume && uploadFile(resume, 'resumeUrl')
  }, [resume])

  const handleApply = async () => {
    try {
      const formData = new FormData();
      formData.append('address', address);
      formData.append('coverLetter', coverLetter);
      formData.append('resume', resume);
  
      // Add any other fields if needed
  
      await applyForJob(formData); // Update this line to send formData
  
      toast.success('Application Successfully Submitted');
      navigate('/dashboard/jobs');
    } catch (error) {
      console.error('Error submitting application:', error);
      // Handle error, show an error toast, etc.
    }
  }
  

  return (
    <div className='board'>
      <Sidebar />
      <div className='main__board'>
        <MDBContainer fluid>
          <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md='10'
                  lg='6'
                  className='order-2 order-lg-1 d-flex flex-column align-items-center'
                >
                  <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                    Apply for Job
                  </p>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='envelope me-3' size='lg' />
                    <MDBInput
                      label='Enter your Address'
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      name='address'
                      id='form2'
                      type='text'
                    />
                  </div>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='lock me-3' size='lg' />
                    {resumePercent > 0 && 'Uploading: ' + resumePercent + '%'}
                    <MDBInput
                      accept='.pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      label='Upload Resume'
                      onChange={handleFileChange}
                      name='resume'
                      id='form3'
                      type='file'
                    />
                  </div>

                  <div className='d-flex flex-row align-items-center mb-4'>
                    <MDBIcon fas icon='lock me-3' size='lg' />
                    <MDBInput
                      label='Write your Cover Letter'
                      value={coverLetter}
                      onChange={e => setCoverLetter(e.target.value)}
                      name='coverLetter'
                      id='form3'
                      type='text'
                    />
                  </div>

                  <MDBBtn
                    className='mb-4'
                    size='lg'
                    onClick={handleApply}
                    style={{ backgroundColor: '#0174BE' }}
                  >
                    Apply
                  </MDBBtn>
                </MDBCol>

                <MDBCol
                  md='10'
                  lg='6'
                  className='order-1 order-lg-2 d-flex align-items-center'
                >
                  <MDBCardImage src={bgApply} fluid />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  )
}

export default Apply
