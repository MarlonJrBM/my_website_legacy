var englishTxt = "English Version";
var portugueseTxt = "Versão Portuguesa";


$(document).ready(

	function()
	{

		$("#translate").click(


			function()
			{
				if (($(this).text()) == englishTxt )
          		//translates to english
        		{
        			$(this).text(portugueseTxt);
        			$("#li1").html('<a href="resume.html">Resume</a>');
                	$("#li2").html('<a href="transcript.html">Transcript</a>');
                	$("#li3").html('<a href="contact.html">Contact</a>');
                	$("#txt1").html('My full name is Marlon Junior Barbosa Marques. I am twenty years old and a junior student ' +
                		'at the Federal University of Minas Gerais (UFMG), majoring in Computer Science. Currenty I live in Belo Horizonte, but I was born in ' +
                		'Conselhiero Lafaiete, where I also graduated from high school at Colégio Potência. Furthermore, I have already done a ' +
                		'<em>high school</em> exchange in the United States, in Albuquerque - New Mexico, where I\'ve lived during one year.');
                	$("#txt2").html('In my academic background, I\'ve always prefered the hard sciences, and the choice for ' + 
                		'Computer Science was pretty straightforward: since I was little I\'ve always been fascinated with ' +
                		'computers. Albeit I have a relatively recent background in the programming world, I\'ve already '
                		+ 'participated in two undergraduate research projects in my graduation, one related to the analysis ' +
                		'of data (through a logistic model) and another related to semantic mapping, in the field of robotics.');

                	$("#txt3").html('Regarding my extracurricular activities, I am a member of the <a href="https://www.facebook.com/rctbhleste" target="_blank">Rotaract Club BH Leste </a> ' +
                		'(a branch of Rotary Club), a worldwide recognized philantropic institution. Besides, I am also a part of ' +
                		'the Academic Directory of Computer Science and Information Systems (<a href="https://www.facebook.com/DACompSI" target="_blank">DACompSI</a>), of which I am the current president. (2013-2014 Term of Service)');

             
				}

				else
				{
					$(this).text(englishTxt); 
					$("#li1").html('<a href="resume.html">Curr&iacute;culo</a>');
                	$("#li2").html('<a href="transcript.html">Hist&oacute;rico</a>');
                	$("#li3").html('<a href="contact.html">Contato</a>');
  					$("#li4").html('<a href="profile.html">Perfil</a>');
  					$("#txt1").html('Meu none completo é Marlon Junior Barbosa Marques. Tenho 20 anos e sou estudante do quinto período do curso de Ciência da Computação da Universidade Federal de Minas Gerais (UFMG). Atualmente moro em Belo Horizonte, mas nasci em Conselheiro Lafaiete - MG, onde também concluí o Ensino Médio, no Colégio Potência. Também já fiz um intercâmbio de <em>high school</em> nos Estados Unidos, na cidade de Albuquerque, Novo México, por onde morei durante um ano.');
  					$("#txt2").html('No meu histórico acadêmico, sempre preferi as ciências exatas, e a escolha do curso de Ciência da Computação foi bem natural: desde pequeno sou fascinado com computadores. Apesar de possuir um histórico relativamente recente no mundo da programação, já participei de dois projetos de iniciação científica em minha graduação, um relacionado a análise de dados (através de um modelo logístico) e outro relacionado a mapeamento semântico, na área da robótica.');
  					$("#txt3").html('Quanto às atividades extracurriculares, faço parte há mais de dois anos do <a href="https://www.facebook.com/rctbhleste" target="_blank">Rotaract Club BH Leste </a> (uma ramificação do Rotary Club), instituição filantrópica reconhecida internacionalmente. Além disso, participo do Diretório Acadêmico de Ciência da Computação e Sistemas de Informação (<a href="https://www.facebook.com/DACompSI" target="_blank">DACompSI</a>), do qual desempenho atualmente o cargo de Colaborador-Geral (gestão 2013/2014).');

				}

			}


			);

	
		}


	);