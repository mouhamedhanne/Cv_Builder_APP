"use client";

import Header from "@/app/dashboard/_components/header/page";
import { Loader2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function page() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin text-red-600" size="32" />
      </div>
    );
  }

  if (isSignedIn && user && user.fullName) {
    return (
      <>
        <Header />
        <div className="pl-7 pt-3">
          <h1 className="text-[23px] font-bold">Hello {user.fullName}!</h1>
          <div>
            {user.emailAddresses.map((email) => (
              <div key={email.emailAddress}>{email.emailAddress}, </div>
            ))}
          </div>
          <Image
            src={user.imageUrl}
            width={250}
            height={250}
            alt={user.fullName}
            className="rounded-lg"
          />
        </div>
        <p className="px-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum vero
          hic, dolore a possimus quia tempore illo fuga et obcaecati praesentium
          quibusdam voluptas omnis minus sit mollitia illum distinctio animi
          enim temporibus sed cum sint? Aut doloribus similique natus. Quam
          amet, pariatur assumenda nulla, totam perferendis ipsam corporis
          nesciunt eaque consequuntur praesentium repellat natus sit aliquid
          quos dolorum fuga at aut esse ut. Possimus nisi eveniet eius sequi
          minima sunt corrupti architecto, quam nulla. Quod ipsa totam nostrum
          sunt illo ullam delectus eligendi praesentium molestiae, odit
          voluptatibus vitae voluptas maiores veniam molestias, numquam itaque
          corrupti ea optio? Nulla et inventore fugit sapiente hic laborum sed
          aspernatur id, culpa, porro dolorum? Tempora fugiat fugit odit sed,
          culpa necessitatibus laborum recusandae ex earum sit veniam voluptas,
          neque asperiores architecto vel eos totam? Ipsa doloremque molestias
          dignissimos harum. Natus vero eveniet commodi voluptates laborum
          deserunt ratione in officiis ipsum possimus sapiente, laudantium
          facilis aspernatur maiores suscipit alias facere molestiae dolorem
          quas. Reiciendis ipsam adipisci facere? Dolor culpa necessitatibus
          nisi ipsam voluptatum delectus alias sequi molestias aliquam, illo
          consectetur explicabo non quae veniam quia corporis nam. Rerum
          voluptatum fugiat itaque ab? Eos at provident numquam iste ex. Ullam
          aspernatur minima earum adipisci, exercitationem doloribus? Repellat
          natus, aliquid in voluptatum eius fuga placeat necessitatibus eos ea.
          Dolore dignissimos iste atque reprehenderit quis. Minus ducimus minima
          voluptatibus recusandae magnam saepe quas sapiente cumque! In sit,
          aspernatur doloribus inventore soluta assumenda laboriosam, rerum sint
          rem incidunt molestiae dignissimos modi autem tenetur quidem dolorem.
          Voluptatibus rem quas amet cupiditate doloremque quam consequatur
          aliquid maiores quisquam, quae commodi exercitationem dolorem, nisi
          ullam reiciendis aliquam ratione optio error soluta aut. Non, neque
          hic. Dignissimos repellat, quos totam harum iste accusamus voluptate
          ullam consequatur quisquam ad eos sit ipsum earum provident animi
          aliquid voluptas mollitia recusandae libero deserunt deleniti eligendi
          nisi sapiente. Officia rerum esse, nobis, aliquid tempora suscipit
          reprehenderit ipsam dignissimos ipsa est voluptatum sunt ex nulla
          repudiandae natus pariatur amet soluta obcaecati dicta placeat
          assumenda quos velit reiciendis optio. Fugiat excepturi libero
          temporibus quae vero aliquid beatae debitis atque veniam ipsum quis
          alias, dolores cum commodi ab hic. Laboriosam, ducimus nemo quae, ex
          eum minima labore doloremque dignissimos, blanditiis perferendis sint
          accusantium! Inventore, molestias. Vel ipsa beatae omnis voluptas
          dicta, pariatur reiciendis maiores, voluptatem voluptatibus officiis
          fuga, labore earum veniam veritatis alias aperiam amet id praesentium
          delectus quasi quis? Repellendus quos laborum, perferendis dignissimos
          voluptatum eligendi dolor ipsa officia quasi ullam accusamus, modi
          facilis, porro ratione. Vitae iste quas doloremque sed suscipit
          nesciunt dicta ut eveniet, nisi neque alias hic. Nisi commodi
          repudiandae aspernatur officiis nam blanditiis iusto ratione nihil
          distinctio explicabo nesciunt reiciendis ducimus quas, natus
          voluptates ex debitis possimus quaerat, dolores illum ab odio
          laboriosam, fugiat suscipit! Sed, at iste sunt commodi corrupti
          asperiores harum id dolore amet expedita mollitia explicabo? Iusto
          adipisci mollitia reiciendis aspernatur ea. Voluptatum id rerum
          aspernatur veritatis itaque. Cum cupiditate, aliquam a quaerat animi
          nobis eveniet iusto harum obcaecati odit consequatur velit. Fugiat
          esse consequuntur assumenda maiores hic. Molestias quidem similique
          iste.
        </p>
      </>
    );
  }

  return <div>Not signed in</div>;
}
