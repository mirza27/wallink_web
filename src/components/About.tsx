"use client";

export function About() {
  return (
    <div className="w-screen bg-[#FCFCFD] h-auto p-8 md:p-12 lg:p-16">
      <div className="bg-[#FCFCFD] w-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="bg-[#FCFCFD] rounded-2xl p-8 text-[#1E1F24] text-center text-md md:text-lg lg:text-xl text-justify">
            <div
              className="flex justify-center items-center mb-4"
              style={{ fontFamily: "Sharp" }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                What is
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0569DC] ml-2">
                Wallink?
              </h2>
            </div>
            <p style={{ fontFamily: "One400" }}>
              Wallink is a digital app for link management and organisation. It
              offers features such as link storage, link categorisation and
              search features, and can be integrated with various other
              browsers. Wallink is specifically designed to meet Generation Z's
              needs and preferences in managing their digital links, with an
              emphasis on effectiveness, efficiency, and minimal user
              interaction. With Wallink, users can easily organise, search and
              access their favourite links anytime and anywhere, making it an
              indispensable tool in this fast-paced digital life.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/wallink-mockup.png"
              className="object-cover min-h-[360px] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
