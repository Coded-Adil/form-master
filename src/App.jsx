import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log(data);
  // }
  // const handleProfileUpdate = data => {
  //   console.log(data);
  // }

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>SignUp</h2>
          <p>Sign Up this form to get forward</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleProfileUpdate}>
        <div>
          <h2>Profile Update</h2>
          <p>Always keep your Profile Updated</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
