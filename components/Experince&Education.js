import PageTitle from "./PageTitle";

const eduEpx = [
  {
    id: 1,
    year: 2023,
    title: "TEAM LEADER, YEARBOOK COMMITTEE",
    institution: "Godfrey Okoye University, Enugu.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque non? Ipsa, illum. Eveniet modi iure sequi saepe, provident eum?",
  },
  {
    id: 2,
    year: 2022,
    title: "TEAM LEADER, YEARBOOK COMMITTEE",
    institution: "University of Santa Solona",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque non? Ipsa, illum. Eveniet modi iure sequi saepe, provident eum?",
  },
  {
    id: 3,
    year: 2021,
    title: "TEAM LEADER, YEARBOOK COMMITTEE",
    institution: "University of Santa Solona",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque non? Ipsa, illum. Eveniet modi iure sequi saepe, provident eum?",
  },
  {
    id: 4,
    year: 2020,
    title: "TEAM LEADER, YEARBOOK COMMITTEE",
    institution: "University of Santa Solona",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque non? Ipsa, illum. Eveniet modi iure sequi saepe, provident eum?",
  },
  {
    id: 5,
    year: 2019,
    title: "TEAM LEADER, YEARBOOK COMMITTEE",
    institution: "University of Santa Solona",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque non? Ipsa, illum. Eveniet modi iure sequi saepe, provident eum?",
  },
];

const Education = () => {
  return (
    <div id='experience' className='px-4 py-12'>
      <PageTitle title='Experience & Education' />

      <div className='pt-8 max-w-lg mx-auto flex flex-col gap-4'>
        {eduEpx.map((epx) => (
          <div key={epx.id} className='w-full flex gap-8'>
            <div className='w-[10%] font-medium text-xl text-yellow-600'>{epx.year}</div>
            <div>
              <h2 className='uppercase font-medium text-xl text-[#521d4d]'>
                {epx.title}{" "}
              </h2>
              <h3 className="text-lg">{epx.institution}</h3>
              <p className='pt-2'>{epx.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
