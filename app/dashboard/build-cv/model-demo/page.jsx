import Header from "@/app/dashboard/_components/header/page";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Header />
      <div className="mt-8">
        <div className="bg-[#1E2532] p-4 mx-4">
          <h3 className="text-white font-bold uppercase">SECTION À PROPOS</h3>
        </div>
        <div>
          <Card className="mx-3 mt-7">
            <CardContent className="mt-4">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>

                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Last Name
                    </label>
                    <Input placeholder="John" />
                  </div>

                  <div>
                    <div className="grid w-full max-w-sm items-center gap-4">
                      <Label htmlFor="picture" className="block font-bold">
                        Photo
                      </Label>
                      <Input
                        id="picture"
                        type="file"
                        className="hover:cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-7">
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Désignation
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Adresse
                    </label>
                    <Input placeholder="John" />
                  </div>

                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Email
                    </label>
                    <Input placeholder="John" />
                  </div>
                </div>

                <div className="flex items-center justify-start lg:gap-x-32 gap-x-10 mt-7">
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Téléphone
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Résumé
                    </label>
                    <Input placeholder="John" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#1E2532] p-4 mx-4 mt-8">
          <h3 className="text-white font-bold uppercase">EXPÉRIENCE</h3>
        </div>
        <div>
          <Card className="mx-3 mt-7">
            <CardContent className="mt-4">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Titre
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Entreprise / Organisation
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Emplacement
                    </label>
                    <Input placeholder="John" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-7">
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Date de début
                    </label>
                    <Input placeholder="John" type="date" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Date de fin
                    </label>
                    <Input placeholder="John" type="date" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Description
                    </label>
                    <Input placeholder="John" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#1E2532] p-4 mx-4 mt-8">
          <h3 className="text-white font-bold uppercase">ÉDUCATION</h3>
        </div>
        <div>
          <Card className="mx-3 mt-7">
            <CardContent className="mt-4">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      École
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Entreprise / Organisation
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Emplacement
                    </label>
                    <Input placeholder="John" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-7">
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Date de début
                    </label>
                    <Input placeholder="John" type="date" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Date de fin
                    </label>
                    <Input placeholder="John" type="date" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Description
                    </label>
                    <Input placeholder="John" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#1E2532] p-4 mx-4 mt-8">
          <h3 className="text-white font-bold uppercase">PROJETS</h3>
        </div>
        <div>
          <Card className="mx-3 mt-7">
            <CardContent className="mt-4">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Nom du projet
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Lien du projet
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Description du projet
                    </label>
                    <Input placeholder="John" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#1E2532] p-4 mx-4 mt-8">
          <h3 className="text-white font-bold uppercase">COMPÉTENCES</h3>
        </div>
        <div>
          <Card className="mx-3 mt-7">
            <CardContent className="mt-4">
              <div>
                <label htmlFor="" className="block mb-2 font-bold">
                  Compétence
                </label>
                <Input placeholder="John" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/** Rendu du resume */}

      {/** */}

      <section id="preview-sc" className="mt-8 print_area">
        <div className="container">
          {/** */}
          <div className="grid grid-cols-[32%,auto] rounded-[5px] shadow-md overflow-hidden">
            <div className="py-[3rem] pr-[2rem] pl-[3rem] bg-green text-white">
              <div className="grid grid-cols-3/10 auto shadow-lg overflow-hidden">
                <div className="w-120 h-120 rounded-full overflow-hidden mx-auto">
                  <Image
                    src=""
                    alt=""
                    className="w-full h-full object-cover"
                    id="image_dsp"
                  />
                </div>
                <div className="text-2.4xl font-semibold my-7 relative preview-item">
                  <span
                    className="absolute bottom-[-10px] left-1/2 transform translate-x-[-50%]
                     w-50 h-1.5 bg-white bg-opacity-50 fw-6"
                    id="fullname_dsp"
                  ></span>
                </div>
                <div className="preview-item">
                  <span
                    className="preview-item-val text-uppercase fw-6 ls-1"
                    id="designation_dsp"
                  ></span>
                </div>
              </div>

              <div className="py-4 mb-4">
                <div className="mb-[1rem]">
                  <h3
                    className="text-uppercase tracking-wider border-b border-solid
                   border-gray-200 pb-2"
                  >
                    about
                  </h3>
                </div>
                <div className="preview-blk-list">
                  <div className="text-lg mb-1 opacity-95">
                    <span
                      className="mt-[1.8rem] preview-item-val"
                      id="phoneno_dsp"
                    ></span>
                  </div>
                  <div className="text-lg mb-1 opacity-95">
                    <span
                      className="mt-[1.8rem] preview-item-val"
                      id="email_dsp"
                    ></span>
                  </div>
                  <div className="text-lg mb-1 opacity-95">
                    <span
                      className="mt-[1.8rem] preview-item-val"
                      id="address_dsp"
                    ></span>
                  </div>
                  <div className="text-lg mb-1 opacity-95">
                    <span
                      className="mt-[1.8rem] preview-item-val"
                      id="summary_dsp"
                    ></span>
                  </div>
                </div>
              </div>

              <div className="py-4 mb-4 preview-blk">
                <div className="text-[#1e2532] mb-[1rem]">
                  <h3
                    className="text-uppercase tracking-wider border-b border-solid
                   border-gray-200 pb-2"
                  >
                    skills
                  </h3>
                </div>
                <div
                  className="skills-items preview-blk-list"
                  id="skills_dsp"
                ></div>
              </div>
            </div>

            <div className="preview-cnt-r bg-white">
              <div className="py-4 mb-4 preview-blk">
                <div className="text-[#1e2532] mb-[1rem]">
                  <h3
                    className="text-uppercase tracking-wider border-b border-solid
                   border-gray-200 pb-2"
                  >
                    Achievements
                  </h3>
                </div>
                <div
                  className="block font-semibold mb-4 bg-gray-100
                   achievements-items preview-blk-list"
                  id="achievements_dsp"
                ></div>
              </div>

              <div className="py-4 mb-4 preview-blk">
                <div className="text-[#1e2532] mb-[1rem] preview-blk-title">
                  <h3>educations</h3>
                </div>
                <div
                  className="block font-semibold mb-4 bg-gray-100
                   educations-items preview-blk-list"
                  id="educations_dsp"
                ></div>
              </div>

              <div className="py-4 mb-4 preview-blk">
                <div className="text-[#1e2532] mb-[1rem] preview-blk-title">
                  <h3>experiences</h3>
                </div>
                <div
                  className="block font-semibold mb-4 bg-gray-100
                   experiences-items preview-blk-list"
                  id="experiences_dsp"
                ></div>
              </div>

              <div className="py-4 mb-4 preview-blk">
                <div className="text-[#1e2532] mb-[1rem] preview-blk-title">
                  <h3>projects</h3>
                </div>
                <div
                  className="projects-items preview-blk-list"
                  id="projects_dsp"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
