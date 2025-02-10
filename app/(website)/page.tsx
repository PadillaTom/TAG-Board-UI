import Image from 'next/image';
import Link from 'next/link';
import { WEBSITE_ROUTES } from '../../constants/routes';

const HomePage = () => {
	return (
		<div className="flex flex-col items-center pt-6 md:pt-16">
			<section className="h-[80vh] min-h-[550px] flex flex-col items-center justify-center text-center gap-6">
				{/* Encabezado */}
				<h1 className="text-4xl font-bold md:text-5xl">
					Gestiona tus proyectos con <span className="text-primary">TAG Board</span>
				</h1>
				<p className="text-lg md:text-xl max-w-2xl text-muted-foreground">
					La plataforma perfecta para programadores y project managers que buscan organizar tareas y equipos de forma
					ágil, al estilo Trello o Jira.
				</p>
				{/* Hero/Imagen o Ilustración */}
				<div className="w-full flex justify-center mt-8">
					<div className="relative w-full  h-64 md:h-80 lg:h-[30rem]">
						<Image
							src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
							alt="Hero Image"
							width={0}
							height={0}
							priority // Carga la imagen de inmediato
							loading={'eager'} // Las demás, con carga diferida
							quality={75} // Reduce el peso de las imágenes sin perder mucha calidad
							className="w-full h-full object-cover rounded-md shadow-lg"
						/>
					</div>
				</div>
			</section>

			{/* Sección de Beneficios */}
			<div className="flex flex-col items-center gap-[2rem] sm:gap-[5rem]">
				<section className="w-full max-w-6xl mt-16 flex flex-col items-center gap-10">
					<h2 className="text-3xl font-semibold">¿Por qué TAG Board?</h2>
					<div className="flex flex-col md:flex-row gap-8 justify-center">
						{/* Tarjeta 1 */}
						<div className="max-w-sm p-6 bg-card text-card-foreground rounded-md shadow-md">
							<h3 className="text-xl font-semibold">Fácil de Usar</h3>
							<p className="text-sm mt-2 text-muted-foreground">
								Diseñado para principiantes y expertos, con una curva de aprendizaje mínima. Arrastra tus tickets y
								mantén el control.
							</p>
						</div>
						{/* Tarjeta 2 */}
						<div className="max-w-sm p-6 bg-card text-card-foreground rounded-md shadow-md">
							<h3 className="text-xl font-semibold">Equipos Ágiles</h3>
							<p className="text-sm mt-2 text-muted-foreground">
								Crea equipos (o “teams”) para cada proyecto y comparte tableros, sprints y tareas de manera
								colaborativa.
							</p>
						</div>
						{/* Tarjeta 3 */}
						<div className="max-w-sm p-6 bg-card text-card-foreground rounded-md shadow-md">
							<h3 className="text-xl font-semibold">Totalmente Personalizable</h3>
							<p className="text-sm mt-2 text-muted-foreground">
								Asigna etiquetas, roles y permisos. Adapta el flujo de trabajo a tus necesidades y metodologías (SCRUM,
								Kanban).
							</p>
						</div>
					</div>
				</section>

				{/* Sección de Funciones Destacadas */}
				<section className="w-full max-w-6xl mt-16 flex flex-col items-center gap-8">
					<h2 className="text-3xl font-semibold text-center">Funciones que Te Encantarán</h2>
					<ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 max-w-4xl">
						<li className="p-4 bg-card rounded-md shadow-md text-card-foreground">
							<h3 className="text-lg font-semibold text-primary">Sprints y Columns</h3>
							<p className="text-sm text-muted-foreground mt-2">
								Organiza tus tickets en Sprints y Columns (Open, In Progress, Done…) para un proceso más ágil.
							</p>
						</li>
						<li className="p-4 bg-card rounded-md shadow-md text-card-foreground">
							<h3 className="text-lg font-semibold text-primary">Relaciones entre Tickets</h3>
							<p className="text-sm text-muted-foreground mt-2">
								Crea dependencias o referencias entre tickets, evitando cuellos de botella y manteniendo claridad en el
								proyecto.
							</p>
						</li>
						<li className="p-4 bg-card rounded-md shadow-md text-card-foreground">
							<h3 className="text-lg font-semibold text-primary">Perfiles Personalizables</h3>
							<p className="text-sm text-muted-foreground mt-2">
								Cada usuario tiene su perfil con bio, avatar y datos de contacto. Mejora la colaboración en equipos
								remotos.
							</p>
						</li>
						<li className="p-4 bg-card rounded-md shadow-md text-card-foreground">
							<h3 className="text-lg font-semibold text-primary">Tags e Invitaciones Fáciles</h3>
							<p className="text-sm text-muted-foreground mt-2">
								Clasifica tus tickets con tags de color y envía invitaciones con un enlace único para añadir miembros al
								equipo.
							</p>
						</li>
					</ul>
				</section>

				{/* CTA Principal */}
				<section className="w-full max-w-4xl mt-16 text-center">
					<h2 className="text-3xl font-semibold mb-4">¡Empieza Hoy Mismo!</h2>
					<p className="text-muted-foreground mb-8">
						Crea un equipo, invita a tus colaboradores y comienza a organizar tus tareas en minutos.
					</p>
					<div>
						<Link
							href={WEBSITE_ROUTES.LOGIN}
							className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
						>
							Crear Cuenta Gratis
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
};

export default HomePage;
