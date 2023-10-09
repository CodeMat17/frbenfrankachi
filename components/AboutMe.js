import PageTitle from "./PageTitle";

const AboutMe = () => {
  return (
    <div id='about' className='bg-purple-50  text-[#521d4d] px-4 py-12'>
      <PageTitle title=' ABOUT ME' />
    
      <div className='text-lg pt-8 max-w-lg mx-auto flex flex-col gap-4'>
        <p>
          Hic textus phantasticus est, tamen legebatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          molestias a officiis voluptatem quibusdam magni suscipit numquam vero
          fuga asperiores?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          architecto perspiciatis, voluptatum expedita maiores repudiandae
          doloremque blanditiis! Recusandae id quod, eveniet eum qui nam
          distinctio error illo mollitia, ipsum suscipit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a
          accusantium dolor perferendis quia repudiandae, aperiam voluptatem
          soluta praesentium, sapiente illum ullam.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
