import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../UserDashboard/slidebar.scss'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBInput,
  MDBListGroup,
  MDBDropdownLink,
  MDBListGroupItem
} from 'mdb-react-ui-kit'
import UserContext from '../../../Context/userContext'

function AdminSidebar() {
  const [showShow, setShowShow] = useState(false)
  const { logoutAdmin, adminToken } = useContext(UserContext);

  const toggleShow = () => setShowShow(!showShow)
  const navigate = useNavigate()


  const handleLogout = async () => {
    await logoutAdmin()
    navigate('/admin-login');
  }


  return (
    <>
        <MDBCollapse
        show={showShow}
        tag='nav'
        className='d-lg-block bg-white sidebar'
      >
        <div className='position-sticky'>
          <MDBListGroup flush className='mx-3 mt-4'>
            <MDBRipple rippleTag='span'>
              <MDBListGroupItem
                active
                style={{ backgroundColor: '#0174BE' }}
                className='border-0 border-bottom rounded rounded'
              >
                <MDBIcon fas icon='tachometer-alt me-3' />
                <Link to={'/dashboard'} className='text-white'>Profile</Link>
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem className='border-0 border-bottom rounded'>
                <MDBIcon fas icon='chart-area me-3' />
                <Link to='/admin-dashboard/create-jobs' className='text-dark'>Create Job</Link>
              </MDBListGroupItem>
            </MDBRipple>
            <MDBRipple rippleTag='span'>
              <MDBListGroupItem className='border-0 border-bottom rounded'>
                <MDBIcon fas icon='chart-area me-3' />
                <Link to='/admin-dashboard/all-users' className='text-dark'>All Users</Link>
              </MDBListGroupItem>
            </MDBRipple>
            <MDBRipple
              rippleTag='span'
              style={{ color: 'red', cursor: 'pointer' }}
            >
              <MDBListGroupItem
                className='border-0 rounded'
                onClick={handleLogout}
              >
                <MDBIcon fas icon='money-bill me-3' />
                Logout
              </MDBListGroupItem>
            </MDBRipple>
          </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar expand='lg' className='fixed-top' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarNav className='d-flex flex-row align-items-center w-auto'>
            <MDBNavbarToggler
              type='button'
              aria-label='Toggle navigation'
              onClick={toggleShow}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand>
              <Link
                to='/'
                className='fs-3 fw-bold'
                style={{ color: '#0174BE' }}
              >
                DHireventures
              </Link>
            </MDBNavbarBrand>

            {/* <MDBCollapse navbar>
              <MDBNavbarItem className="d-flex align-items-center">
                <MDBInput label='Search (ctrl + "/" to focus)' id='form1' type='text' />
                <MDBIcon fas icon="search mx-2" />
              </MDBNavbarItem>
            </MDBCollapse> */}
          </MDBNavbarNav>
          <MDBNavbarNav className='d-flex flex-row justify-content-end w-auto'>
            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag='a'
                  href='#!'
                  className='hidden-arrow nav-link'
                >
                  <MDBIcon fas icon='bell' />
                  <MDBBadge color='danger' notification pill>
                    1
                  </MDBBadge>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='#'>Some news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='#'>Another news</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='#'>
                      Something else here
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fas icon='fill-drip' />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fab icon='github' />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag='a'
                  href='#!'
                  className='hidden-arrow nav-link'
                >
                  <img
                    src='https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg'
                    className='rounded-circle'
                    height='22'
                    alt=''
                    loading='lazy'
                  />
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='#'>My profile</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='#'>Settings</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href='#'>Logout</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default AdminSidebar