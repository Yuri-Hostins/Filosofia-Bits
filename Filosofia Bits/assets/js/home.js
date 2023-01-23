// Functions

	function openMenu() {
		$('.js-menu-container').addClass('is-open'); // Encontre o elemento com a classe 'js-menu-container' e aplique uma classe adicional de 'is-open'
	}


	function closeMenu() {
		$('.js-menu-container').removeClass('is-open'); // Encontre o elemento com a classe 'js-menu-container' e remova a classe 'is-open'
	}

// Documento pronto

	jQuery(document).ready(function($){ // Quando tudo terminar de carregar

		$('.js-menu-button').click(function(){ // Quando o elemento com a classe 'js-menu-button' é clicado
			openMenu(); // Execute a função openMenu
		});

		$('.js-menu-close').click(function(){ // Quando o elemento com a classe 'js-menu-close' é clicado
			closeMenu(); // Execute a função closeMenu
		});

	});

// Acessibilidade do teclado

	jQuery(document).keyup(function(e) { // Ouça os pressionamentos do teclado

		if (e.keyCode === 27) { // Tecla 'Esc'

			if ($('.js-menu-container').hasClass('is-open')) { // Se o menu estiver aberto feche-o
				closeMenu(); // Execute a função closeMenu
			}

		}

	});