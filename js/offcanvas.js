var englishTxt = "English Version";
var portugueseTxt = "Versão Portuguesa";

$(document).ready(function() {

  $("#translate").click(
  		function()
  		{
  			if (($(this).text()) == englishTxt )
  				//translates to english

  			{
  				$(this).text(portugueseTxt); 
  				$("#txt1").html('Welcome!');
  				$("#txt2").html('I\'m a 20 year old college student, majoring in Computer Science. This page contains information about my curriculum and academic life.');
  				$("#li1").html('<a href="resume.html">Resume</a>');
                $("#li2").html('<a href="transcript.html">Transcript</a>');
                $("#li3").html('<a href="contact.html">Contact</a>');
                $("#li4").html('<a href="profile.html">Profile</a>');
                $("#txt4").html('<strong>Christmas Message</strong>');
                $("#txt5").html('<strong>To rembember is to live</strong>');

  			}

  			else
  				//translates to portuguese
  			{
  				$(this).text(englishTxt); 
  				$("#txt1").html('Seja bem-vindo!');
  				$("#txt2").html('Sou um universitário de 20 anos, estudante de Ciência da Computação. Esta página contém informações sobre o meu currículo e vida acadêmica.');
  				$("#li1").html('<a href="resume.html">Curr&iacute;culo</a>');
                $("#li2").html('<a href="transcript.html">Hist&oacute;rico</a>');
                $("#li3").html('<a href="contact.html">Contato</a>');
  				$("#li4").html('<a href="profile.html">Perfil</a>');
  				$("#txt4").html('<strong>Mensagem de Natal</strong>');
                $("#txt5").html('<strong>Relembrar &eacute; viver</strong>');


  			}
  		}



  	);

  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});