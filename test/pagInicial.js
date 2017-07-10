describe('Teste página inicial', function () {
    it('deve verificar se possui um input', function () {
        browser.get('http://localhost:4051/');

        expect($('#inputPesquisa').isPresent()).toBe(true);
    });

    it('deve verificar se possui um botão', function () {
        browser.get('http://localhost:4051/');

        expect($('#botaoPesquisa').isPresent()).toBe(true);
    });

    it('deve verificar se css animate aparece ao escrever no input', function () {
        browser.get('http://localhost:4051/');
        var div = $('#divPesquisa');
        var input = $('#inputPesquisa');

        input.sendKeys('input-class-test');
        expect(div.getAttribute('class')).toMatch('full-height-animate');
    });

    it('deve verificar se css animate desaparece ao deletar no input', function () {
        browser.get('http://localhost:4051/');
        var div = $('#divPesquisa');
        var input = $('#inputPesquisa');

        input.sendKeys('input-class-test');
        input.clear();

        expect(div.getAttribute('class')).toMatch('full-height-animate-down');
    });

    it('deve mostrar resultado da pesquisa após clique em "Pesquisar"', function () {
        browser.get('http://localhost:4051/');
        var button = $('#botaoPesquisa');
        button.click();

        expect(element(by.id('resultadoPesquisa')).isPresent()).toBe(true);
    });

    it('deve verificar se após pesquisa há título', function () {
        browser.get('http://localhost:4051/');
        var titulo = $('span.md-headline.ng-binding');
        var button = $('#botaoPesquisa');

        button.click();
        expect(titulo.isPresent()).toBe(true);
    });

    it('deve verificar se após pesquisa há descrição', function () {
        browser.get('http://localhost:4051/');
        var descricao = $('span.md-subhead.ng-binding');
        var button = $('#botaoPesquisa');

        button.click();
        expect(descricao.isPresent()).toBe(true);
    });

    it('deve verificar se após pesquisa há thumbnail', function () {
        browser.get('http://localhost:4051/');
        var descricao = $('md-card-title-media');
        var button = $('#botaoPesquisa');

        button.click();
        expect(descricao.isPresent()).toBe(true);
    });

    it('deve verificar se após pesquisa há botão para mais informações', function () {
        browser.get('http://localhost:4051/');
        var botaoAvancar = $('button.md-button.md-ink-ripple.md-dark-blue-theme');
        var button = $('#botaoPesquisa');

        button.click();
        expect(botaoAvancar.isPresent()).toBe(true);
    });

});