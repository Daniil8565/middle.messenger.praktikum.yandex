const tpl = `
    <div class="content">
        <div class='avatar'><span class='avatar__image'></span></div>
        <form class="form" action="">
            <div class="form__content">
            <label class="label" for="{{for}}">
                {{ description }}
            </label>
            <input class="input" type="{{type}}" id="{{id}}" name="{{name}}" />
            </div>;
        </form>
      </div>
`;

export default tpl;

//   {{> formSection for="login" type="text"
//   id="login" name="login" description="Логин"}}
//   {{> formSection
//   for="first_name" type="text" id="first_name" name="first_name"
//   description="Имя"}}
//   {{> formSection for="second_name" type="text"
//   id="second_name" name="second_name" description="Фамилия"}}
//   {{>formSection for="display_name" type="text" id="display_name"
//   name="display_name" description="Имя в чате"}}
//   {{> formSection for="tel" type="tel" id="tel" name="phone" description="Телефон"}}
//   {{> profileButton title="Сохранить"}}
