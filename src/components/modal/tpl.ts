const tpl: string = `
    <div class="modal__content">
    <h3 class="modal__status">{{header}}</h3>
    <div class="modal__file-info" style="display: none;"></div>
    <form>
        <label for="fileInput" class="modal__upload-link">{{description}}</label>
        <input name='avatar' type="file" id="fileInput" class="modal__file-input" accept="image/*" style="display: none;"/>
        <button type="submit" class="modal__button" id="uploadButton" style="display: none;">{{button_description}}</button>
        <button class="modal__close">{{buttonClose__description}}</button>
    </form>
    </div>
`;

export default tpl;
