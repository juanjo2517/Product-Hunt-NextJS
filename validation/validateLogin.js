export default function validateLogin(values){
    let errors = {};

    if(!values.email){
        errors.email = "El correo es obligatorio";
    }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ){
        errors.email = "El correo no es válido";
    }

    if(!values.password){
        errors.password = "La Contraseña es obligatoria";
    }else if(values.password.length < 6){
        errors.password = "La Contraseña debe tener como mínimo 6 caracteres";
    }

    return errors;
}