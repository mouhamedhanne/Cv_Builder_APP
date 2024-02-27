import Header from "@/app/dashboard/_components/header/page";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-7">
                  <div>
                    <div className="grid w-full max-w-sm items-center gap-4">
                      <Label htmlFor="picture" className="block font-bold">
                        Photo
                      </Label>
                      <Input id="picture" type="file" />
                    </div>
                  </div>
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
                </div>

                <div className="flex items-center justify-between mt-7">
                  <div>
                    <label htmlFor="" className="block mb-2 font-bold">
                      Email
                    </label>
                    <Input placeholder="John" />
                  </div>
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
      </div>
    </>
  );
}
