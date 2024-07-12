export default function UncontrolledForm() {
  return (
       <>
            <h1>Uncotrolled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' id='username'/>
                </div>

                <div>
                    <label htmlFor="passowrd">Password</label>
                    <input type="password" name='password' id="password" />
                </div>

                <div>
                    <input type="submit" value='Login'/>
                </div>
            </form>

       </>
   );
}