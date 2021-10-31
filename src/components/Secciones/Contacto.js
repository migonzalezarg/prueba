import React, { useState } from 'react'

export const Contacto = () => {

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        comentarios: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(values)
    }

    return (
        <div className="container my-5">

            <form onSubmit={handleSubmit}>
                <p className="tituloPrincipal">Completa el formulario y te contactaremos a la brevedad</p>

                <div className="my-4">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                    />
                    {values.nombre.length === 0 && <small>Campo obligatorio</small>}
                </div>

                <div className="my-4">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Apellido"
                        name="apellido"
                        value={values.apellido}
                        onChange={handleInputChange}
                    />
                    {values.apellido.length === 0 && <small>Campo obligatorio</small>}
                </div>

                <div className="my-4">
                    <input
                        className="form-control my-2"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    {values.email.length === 0 && <small>Campo obligatorio</small>}
                </div>

                <div className="my-4">
                    <input
                        className="form-control my-2"
                        type="telefono"
                        placeholder="Telefono"
                        name="telefono"
                        value={values.telefono}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="my-4">

                    <textarea
                        className="form-control my-2"
                        rows="3"
                        type="comentarios"
                        placeholder="Comentarios"
                        name="comentarios"
                        value={values.comentarios}
                        onChange={handleInputChange}
                    />
                    {values.comentarios.length === 0 && <small>Campo obligatorio</small>}
                </div>

                <div>
                    <button className="btn btn-warning" type="submit">Enviar</button>
                </div>
            </form >
        </div >
    )
}
