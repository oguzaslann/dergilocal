const initialUser = {
    username        : "",
    nameSurname     : "",
    email           : "",
    isLogined       : false,
    img             : {
    userImg         : {type: String},
    bgImg           : {type: String}
                      },
    social          : {
                        facebook  : {type: String},
                        twitter   : {type: String},
                        instagram : {type: String}
                      },
    birthDate       : {type: String},
    info            : {type: String},
    roles           : {type: Number, default:"1"},
    validation      : {
                        isValidation    : {type: Boolean, default:0}
                      }
}