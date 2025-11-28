const Stats = () => {
  return (
    <section className="w-full flex justify-center -mt-16">
      <div className="bg-white shadow-lg rounded-xl py-10 px-8 w-[90%] md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        <div>
          <h2 className="text-3xl font-bold text-primary">+3,500</h2>
          <p className="text-[#495057] mt-2">Patients served</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-primary">+15</h2>
          <p className="text-[#495057] mt-2">Available specialists</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-primary">+10</h2>
          <p className="text-[#495057] mt-2">Years in the market</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;