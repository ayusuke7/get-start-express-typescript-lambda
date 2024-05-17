export class UserMessages {
  static serverGenericError = {
    status: 500,
    message: "Op's ocorreu um erro no servidor!",
  };

  static userNotAuthorized = {
    status: 401,
    message: "Usuário não autorizado",
  };

  static userNotFound = {
    status: 404,
    message: "Usuário não encontrado",
  };

  static userOrPasswordIncorrect = {
    status: 403,
    message: "Usuário ou Senha incorretos",
  };

  static userNotPermited = {
    status: 403,
    message: "Usuário sem permissao",
  };

  static userHasExists = {
    status: 400,
    message: "Já existe um usuario com esse email cadastado!",
  };
}
