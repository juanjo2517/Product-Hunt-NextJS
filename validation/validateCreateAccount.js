export default function validateCreateAccount(values){
    let errors = {};

    if(!values.name){
        errors.name = "El nombre es obligatorio";
    }

    if(!values.email){
        errors.email = "El correo es obligatorio";
    }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ){
        errors.email = "El correo no es válido";
    }

    if(!values.password || !values.password2){
        errors.password = "La Contraseña es obligatoria";
    }else if(values.password !== values.password2){
        errors.password = "Las Contraseñas no coinciden";
    }else if(values.password.length < 6){
        errors.password = "Las Contraseñas debe tener como mínimo 6 caracteres";
    }

    return errors;
}