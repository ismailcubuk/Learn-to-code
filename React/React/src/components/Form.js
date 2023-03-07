import React, { useState } from 'react'

function Form() {

    const [form, setForm] = useState({ name: "", surname: "", gender: "0" });
    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };
    // const [name, setName] = useState("")
    // const [surname, setSurname] = useState("")
    // const [gender, setGender] = useState("0")

    return (
        <div>
            <div>isim</div>
            <input placeholder="isim" name="name" value={form.name} onChange={handleChange} />
            <input placeholder="soyisim" name="surname" value={form.surname} onChange={handleChange} />
            <div>
                {form.name} {form.surname}
            </div>
            <br></br>
            <div>
                <div>Cinsiyet</div>
                <select valıe={form.gender} onChange={handleChange} name="gender" > 
                    <option value="0">Erkek</option>
                    <option value="1">Kadın</option>
                </select>
            </div>
            <hr />

            <div>
                isim:
                <storng>
                    {form.name} {form.surname}
                </storng>
                <br></br>
                Cinsiyet:
                <storng>
                    {form.gender === "0" ? "erkek" : "kadın"}
                </storng>
            </div>
        </div>

    )
}

export default Form