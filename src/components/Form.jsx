import { useState } from "react";
export default function Form() {
    let myDefaultData = {
        username: '',
        email: '',
        password: ''
    }
    const [formData, setFormData] = useState(myDefaultData)

    const [data, setData] = useState([])


    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    // function handleSubmit
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
        setData([...data, formData])
        setFormData(myDefaultData)
    }
    // function to clear
    function handleClear() {
        setData([])
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4 mt-4">
                {/* username */}
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" id="username" className="form-control" placeholder="Enter username" onChange={handleChange} value={formData.username} />
                </div>
                {/* email */}
                <div>
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" id="email" value={formData.email} className="form-control" placeholder="Enter email" onChange={handleChange} />
                </div>
                {/* email */}
                <div>
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" id="password" value={formData.password} className="form-control" placeholder="Enter password" onChange={handleChange} />
                </div>
                {/* action Buttons */}
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                {
                    data.length > 0 && <button type="button" className="btn btn-danger mb-3" onClick={handleClear}>Clear All Data</button>
                }
            </form>
            {
                data.length > 0 && <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">SrNo</th>
                            <th scope="col">username</th>
                            <th scope="col">email</th>
                            <th scope="col">password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((element, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{element.username}</td>
                                    <td>{element.email}</td>
                                    <td>{element.password}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </>
    )
}