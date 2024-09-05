import { useFormik } from "formik"
import * as Yup from "yup"
import { BsFillPeopleFill } from "react-icons/bs"
import { FaFacebook, FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { MdAttachEmail } from "react-icons/md"

import { Card, Container, Formulario, Sociais, ButtonEmail, ButtonZap, Env, TextItem } from "./styles"
import { colors, cores } from "../../styles/variaveis"

const Jobs = () => {
    const validationSchema = Yup.object({
        nome: Yup.string().required("Nome é obrigatório"),
        email: Yup.string().email("Email inválido").required("Email é obrigatório"),
        telefone: Yup.string().matches(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Telefone inválido").required("Telefone é obrigatório"),
        mensagem: Yup.string().required("Mensagem é obrigatória")
    })

    const formik = useFormik({
        initialValues: {
            nome: "",
            email: "",
            telefone: "",
            mensagem: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const mailtoLink = `mailto:metalurgicabiazin@hotmail.com?subject=Contato de ${values.nome}&body=Nome: ${values.nome}%0AEmail: ${values.email}%0ATelefone: ${values.telefone}%0AMensagem: ${values.mensagem}`
            window.location.href = mailtoLink
        }
    })

    const handleSubmitWhatsApp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!formik.isValid) {
            formik.setTouched({
                nome: true,
                email: true,
                telefone: true,
                mensagem: true
            })
            return
        }
        const whatsappLink = `https://api.whatsapp.com/send?phone=5544999875065&text=Nome: ${formik.values.nome}%0AEmail: ${formik.values.email}%0ATelefone: ${formik.values.telefone}%0AMensagem: ${formik.values.mensagem}`
        window.open(whatsappLink, "_blank")
    }

    return (
        <>
        <TextItem>Trabalhe Conosco</TextItem>
        <Container>
           <Sociais>
           <Card>
                <div><h2 style={{color: `${cores.text1}`, marginTop: '8px'}}>Redes Sociais</h2></div>
                <div>
                    <span>
                        <h2>+</h2>
                        <BsFillPeopleFill style={{ marginRight: '4px' }} size={48} color={colors.people} />
                    </span>
                    <a href="https://www.facebook.com/share/F1yrmuiAtZ4HtwSs/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={40} color={colors.facebook} />
                    </a>
                    <a href="https://www.instagram.com/metalurgicabiazin10?igsh=NzYxeml4Ym9ydmJ6" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={40} color={colors.instagram} />
                    </a>
                </div>
            </Card>
            <Card>
                <div><h2 style={{color: `${cores.text1}`, marginTop: '8px'}}>E-Mail</h2></div>
                <div>
                    <span>
                        <MdAttachEmail size={48} color={colors.people} />
                    </span>
                    <h3 style={{color: `${cores.text1}`}}>metalurgicabiazin@hotmail.com</h3>
                </div>
            </Card>
            <Card>
                <div><h2 style={{color: `${cores.text1}`, marginTop: '8px'}}>Telefone</h2></div>
                <div>
                    <span>
                        <FaWhatsapp size={48} color={colors.people} />
                    </span>
                    <h3 style={{color: `${cores.text1}`}}>+55 (44) 99987-5065</h3>
                </div>
            </Card>
           </Sociais>
            <Formulario>
            <form onSubmit={formik.handleSubmit}>
                <ul>
                    <li>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            value={formik.values.nome}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.nome && formik.errors.nome ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.nome}</div>
                        ) : null}
                    </li>
                    <li>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.email}</div>
                        ) : null}
                    </li>
                    <li>
                        <input
                            type="tel"
                            name="telefone"
                            placeholder="Telefone"
                            value={formik.values.telefone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.telefone && formik.errors.telefone ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.telefone}</div>
                        ) : null}
                    </li>
                    <li>
                        <textarea
                            name="mensagem"
                            placeholder="Mensagem"
                            value={formik.values.mensagem}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.mensagem && formik.errors.mensagem ? (
                            <div style={{ color: "#61DBFB" }}>{formik.errors.mensagem}</div>
                        ) : null}
                    </li>
                </ul>
                <Env>
                    <ButtonEmail type="submit">
                        <MdAttachEmail size={24} color={colors.people} />
                        Enviar
                    </ButtonEmail>
                    <ButtonZap onClick={handleSubmitWhatsApp}>
                        <FaWhatsapp size={24} color={colors.people} />
                        Enviar
                    </ButtonZap>
                </Env>
            </form>
            </Formulario>
        </Container>
        </>
    )
}

export default Jobs
