const tpl: string = `
        <div class="container__nav">
          <nav class="nav">
            <div class="message__link">
              <a class="mes__link" href=""
                ><p class="link__description">Профиль</p>
                <span class="link__image"></span
              ></a>
            </div>
            <button class="button__search">
              <div class="container__search">
                <span class="search__image"></span>
                <p class="search__description">Поиск</p>
              </div>
            </button>
            <ul class="list__chats">
                {{{item}}}
            </ul>
          </nav>
        </div>
        <div class="content__message">
          <div class="content__header"></div>
          <div class="content__main"></div>
          <div class="content__footer">
            <a href=""><span class="footer__Investment"></span></a>
            <form action="" class="form__message">
              <input
                class="input__message"
                type="text"
                placeholder="Сообщение"
                name="message"
              />
              <button class="button__message"></button>
            </form>
          </div>
        </div>
`;

export default tpl;
