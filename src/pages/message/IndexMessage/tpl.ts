const tpl: string = `
        <div class="container__nav">
          <nav class="nav">
            <div class="message__link">
              {{{link}}}
            </div>
            {{{CreateChatUser}}}
            <ul class="list__chats">
              {{{items}}}
            </ul>
          </nav>
        </div>
        <div class="content__message">
          {{{Header}}}
          <div class="content__main">
          </div>
          <div class="content__footer">
            {{{form}}}
          </div>
        </div>
        {{{ModalADD}}}
        {{{ModalDELETE}}}
        {{{ModalCreateUser}}}
`;

export default tpl;
