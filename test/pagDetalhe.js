describe('Teste página de detalhe', function () {
    it('deve verificar se página de detalhe há título', function () {
        browser.get('http://localhost:4051/');
        var titulo = $('h2.ng-binding');
        var button = $('#botaoPesquisa');
        var botaoAvancar = $('button.md-button.md-ink-ripple.md-dark-blue-theme');

        button.click();
        botaoAvancar.click();
        expect(titulo.isPresent()).toBe(true);
    });

    it('deve verificar se página de detalhe há descrição', function () {
        browser.get('http://localhost:4051/');
        var descricao = $('p.ng-binding');
        var button = $('#botaoPesquisa');
        var botaoAvancar = $('button.md-button.md-ink-ripple.md-dark-blue-theme');

        button.click();
        botaoAvancar.click();
        expect(descricao.isPresent()).toBe(true);
    });

    it('deve verificar se página de detalhe há quantidade de visualização', function () {
        browser.get('http://localhost:4051/');
        var visual = $('strong > p.ng-binding');
        var button = $('#botaoPesquisa');
        var botaoAvancar = $('button.md-button.md-ink-ripple.md-dark-blue-theme');

        button.click();
        botaoAvancar.click();
        expect(visual.isPresent()).toBe(true);
    });

    it('deve verificar se página de detalhe há video', function () {
        browser.get('http://localhost:4051/');
        var video = $('iframe');
        var button = $('#botaoPesquisa');
        var botaoAvancar = $('button.md-button.md-ink-ripple.md-dark-blue-theme');

        button.click();
        botaoAvancar.click();
        expect(video.isPresent()).toBe(true);
    });

    it('deve verificar se página de detalhe há botão de voltar', function () {
        browser.get('http://localhost:4051/');
        var buttonVoltar = $('button.md-raised.md-primary.md-button.md-ink-ripple');
        var button = $('#botaoPesquisa');
        var botaoAvancar = $('button.md-button.md-ink-ripple.md-dark-blue-theme');

        button.click();
        botaoAvancar.click();
        expect(buttonVoltar.isPresent()).toBe(true);
    });

    it('deve verificar se página de detalhe é capaz de voltar', function () {
        browser.get('http://localhost:4051/');
        var buttonVoltar = $('button.md-raised.md-primary.md-button.md-ink-ripple');
        var button = $('#botaoPesquisa');
        var botaoAvancar = $('button.md-button.md-ink-ripple.md-dark-blue-theme');

        button.click();
        botaoAvancar.click();
        buttonVoltar.click();
    });
});