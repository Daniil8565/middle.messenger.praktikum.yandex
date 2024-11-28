const tpl: string = `
        <div class="container__nav">
          <nav class="nav">
            <div class="message__link">
              {{{link}}}
            </div>
            <button class="button__search">
              <div class="container__search">
                <span class="search__image"></span>
                <p class="search__description">Поиск</p>
              </div>
            </button>
            <ul class="list__chats">
              {{{items}}}
            </ul>
          </nav>
        </div>
        <div class="content__message">
          {{{Header}}}
          <div class="content__main"></div>
          <div class="content__footer">
            <a href=""><span class="footer__Investment"></span></a>
            {{{form}}}
          </div>
        </div>
        {{{ModalADD}}}
        {{{ModalDELETE}}}
`;

export default tpl;
