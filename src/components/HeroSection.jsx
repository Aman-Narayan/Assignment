import React from "react";
import Cards from "./Cards";

const HeroSection = () => {
  return (
    <div className="mainDiv flex justify-evenly">
      {/* //Side bar */}
      <div className="LeftDiv w-[20%] mt-2 mb-2 ml-2">
        <div className="HotDeals bg-gray-200 flex-col mb-5 w-[80%] p-5 rounded-sm">
          <h1 className="font-medium m-2">Hot Deals</h1>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Nike</span>
            <span>1</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Airmax</span>
            <span>48</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Nike New</span>
            <span>14</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Addidas</span>
            <span>15</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Vans</span>
            <span>23</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>All Star</span>
            <span>1</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Addidas New</span>
            <span>95</span>
          </div>
        </div>
        <div className="PriceRange bg-gray-200 flex-col mb-5 w-[80%] p-5 rounded-sm">
          <h1 className="mb-2 font-medium">PRICES</h1>
          <div className="mb-2">
            <span>Ranger: </span>
            <span>$13.99-$25.99 </span>
          </div>
          <div>
            <input className="w-full" type="range" />
          </div>
        </div>

        <div className="Color bg-gray-200 flex-col mb-5 w-[80%] p-5 rounded-sm">
          <h1 className="mb-2 font-medium">COLOR</h1>
          <div className="flex justify-between">
            <div className="Colors w-4 h-4 bg-red-800 rounded-full border-red-400"></div>
            <div className="Colors w-4 h-4 bg-blue-700 rounded-full border-blue-400"></div>
            <div className="Colors w-4 h-4 bg-black rounded-full border-white"></div>
            <div className="Colors w-4 h-4 bg-yellow-500 rounded-full border-yellow-400"></div>
            <div className="Colors w-4 h-4 bg-pink-400 rounded-full border-pink-400"></div>
            <div className="Colors w-4 h-4 bg-gray-400 rounded-full border-gray-400"></div>
          </div>
        </div>

        <div className="BANDS bg-gray-200 flex-col mb-5 w-[80%] p-5 rounded-sm">
          <h1 className="font-medium m-2">Catagory</h1>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Man Sirt</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Girls Dress</span>
          </div>
        </div>
        <div className="BANDS bg-gray-200 flex-col mb-5 w-[80%] p-5 rounded-sm">
          <h1 className="font-medium m-2">BRANDS</h1>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Nike</span>
            <span>99</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Vans</span>
            <span>99</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Adidas</span>
            <span>99</span>
          </div>
          <div className="flex justify-between p-2 hover:text-blue-500 cursor-pointer">
            <span>Siemens</span>
            <span>15</span>
          </div>
        </div>

        <div className="More bg-gray-200 flex-col mb-5 w-[80%] p-2 rounded-sm">
          <h1 className="mb-2 font-medium text-center">More</h1>
        </div>
      </div>
      {/* //Main bar */}
      <div className="rightDiv w-[78%] m-2">
        <div className="h-3/12 w-full bg-blue-400 flex justify-between text-amber-50 rounded-lg">
          <div className="m-5 p-5 items-end flex-col">
            <h1 className="font-semibold text-3xl mt-20">
              Adidas Mens Running
            </h1>
            <div className="mt-2 mb-2">
              <h1 className="font-semibold text-3xl">Sneakers</h1>
              <p>Performance and Design, Taken right to the endge</p>
            </div>
            <a className="border-b-2">Shop Now</a>
          </div>
          <div className="m-5 p-5">
            <img
              className="w-60 rounded-2xl"
              src="https://m.media-amazon.com/images/I/614aiM56siL._UY1000_.jpg"
              alt="Sneakers"
            />
          </div>
        </div>

        <div className="flex justify-evenly items-center bg-gray-200 p-2 rounded-sm mt-5">
          <h1>13 items</h1>
          <div className="flex items-center">
            <h1 className="mr-4">Sort By</h1>
            <select
              id="Sort"
              name="Sort"
              className="border-gray-400 rounded-sm w-25 border m-1 p-1 items-center"
            >
              <option value="Name">Name</option>
              <option value="Price">Price</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="mr-4">Shows</h1>
            <input
              type="number"
              className="w-10 border border-gray-400 m-2 p-2 w-14 h-7 rounded-sm"
            />
          </div>
          <div className="flex">
            <div className="m-1 p-1">
              <img
                className="w-10"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE53CcrC1Um0RBW6kwBZFvZGMGKcrqeCME1Q&s"
              />
            </div>
            <div className="m-1 p-1 mr-[-220px]">
              <img
                className="w-10"
                src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg"
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex justify-between">
          <Cards
            imgUrl={
              "https://www.campusshoes.com/cdn/shop/files/FENCE_22G-1060_WHT-BLK_2.jpg?v=1756387991"
            }
          />
          <Cards
            imgUrl={
              "https://www.giftsmyntra.com/wp-content/uploads/2021/01/Prive-Ladies-hand-bag.jpg"
            }
          />
          <Cards
            imgUrl={
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFhUXGBgYFxgYGBgeGBYeGhUWFhgXGCAZHSggHholGxUXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0dHR0tMC0tLS0tLS8tLS0rLS0tLS4tKystLS0tLS0tLS0tLS0tLS0tLS0tLS0tKystLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABEEAACAQIEAwUEBwYFAwQDAAABAhEAAwQSITEFQVEGEyJhcTKBkaEUI0JSscHRFRZicpLwBzNTVOGCk/FDstLiY6LC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EACsRAAICAQQBAgUEAwAAAAAAAAABAhEDBBIhMUETUQUiYXGxMoGh0UJSkf/aAAwDAQACEQMRAD8A9gwuFHPeihZFcmnAVIiLKKeBQeKxLI6KLbuGmWEQkdZM6zRtAHK4ahxuOt2lLXGAABPnAEmBudBWRxfaMXkZrrHDYYjRgfrro6KBOUEdNfyEgL3iHGSGNqzae7cidotDceJzpy2EmsBilu4oXO+u5nDlQAYtyqgnIpjwglhzPhJNanhz3rmHyYPDratNIDXbjq4B/wDUyhGkmZHi6bbVBjeFnBILxyX7aQTbYBe7kBJsjUT5NJ1Pi11khMx+C4fctsUC57kyShLaakCFB131g78qv8NaxK24dXClh3rhRnCgZiylmneBouwJ0NEfvLiLqF8NZtKukBpzExsR4YOo2kab1m+0fGb7MMuJckCCFQoAWHiWDr7+UDXqxHqHBEspbAsrCHWYOpPMk6k+ZrvFMVaFu53jKECnOSYygjn00rNcHxGOKqWCkBYKt4c3QmJ1ArJ9o8Q928TcIa4jZRatoXW3lOhZiAGaZOug8qVBZdjtZdwoFplN85QwLSjqCJCvoZIES0D31ZYLjGIxOd7LWhbQ5TFu68nyOkx5CsnZw3eXl7y3eclgXgCdwdh4oiefKr7jXA8VedPo628OokSngdRuMxXWNPZBO/wYgnimPxOFIIxCPm+zcUKJ38IPiPPnpFVHEeO4jiNsWbdopbOty4PtZSD3aSREncztNWfDf8Pzq2IvF2O8EkkebHU/CtVgeE27S5UAAHL8/WlaHRiLXZK9diQqLpEktA0O2gB9DWo4d2WsWQNCxmZPM/kPKrzLApDWgAJ8ChMgcoqW1hlUQoAHlRWWKaaQAj3Y5GuMwAkipbj9KgKFjBBj8aYAV7Hgcxy907TRNqzm1Joa7gyXgKI69PXrVnngQKAIL5VBJIA86zXG+01u0SiA3bv3FjTbVjsN+dTdrLydzcU3PEykKoAJBjpVDa7LzbCqTbUgTlHi8xJ1+VAFJb4v3zzfYO2ggZjbXyC8zrE6mrbBWQ6wbDEgnxZQpgnzA+VRYLgy2sRktBmAjPG+2uvI1tUdEXUgAbkn8SaBFB+ybP3G+dKrD9vYP/Xtf1D9aVAGzFOU1T8T4/ZsEISz3DtatKXuESATlXUATuYFRYniWKdfqcKQSNO+uIoG+jZCxHwNKhlhxji9rDWzdvPlUEDYkksQqqAJJJJiAKzH70X763zYtsAgbuyUIDQNy7wu86CTpRTcCxOIgYlrarPiFvMzMOQV2AyaaEquYzoRTu12FRrVqwxIS5dtW8qsVmW9k5YOXKCY8qYclfwR8ViMPZuLYXx5WuPfueNwNQAEVoBOsE7cqO4d2NQXWv4grcdiYRVy2lB5FR7Z6luesVe4Sz3cW0ACKAFH3QBEDyojF4tbYlj7hqT6AUmx0OsWwogAADYDaq3ivDPpJUZsqqZkAFm8hIgDzqZcSX1jTpz99EWg2/yoGB4PhhtOSLjFSoGQhAAQSc3hUEnlqax/afgN1rzPatsQYLHNOYzJMctABtsK37efxppYLzoQjCcEtYq5OHNwpl1uaENbUtARSZJJVZBBEZvKK2nDuG27KBLaBQJ9SSZJJOpJJJJPWqvhrC7jLtxCCFCWjBEZlzM0+YzgfGtIBQ2BB3PlXGta0TUdy3NKwo4HApEiKcBFMc0ARNr6U4XQOVPpmTrQAx8QKZm6/CntZmuLh6YhvenYCK5FPYgCay+O7Uh3W1hVN525ie7Qc2ZvyFMDQO8A1WY67eYAWcoM6s3IQdQOZmKo+J4h8GO+v3WuZmVWGyICY8KjTSeck9add7bYO2CTdDnYC34o9Y0GtMC54fwK0ktc8bnVmYbnrTeN8St2rb5XUMFJA05DfUgAeZNZzNex5DswGE8cgG6puaADXwyJJ120ptjsrca5buKciqdATyGggGaBEXDHxCqWXLD+I3CJ31JA3J36jSs7iMfdS9BvK5DHW8VMba5BGU6kiByPpXpN7hNqNRnI1ljzjesn2g4jawx0VHua6JGhA0z6zGtACz3/APWX/t//AFpVj/p+N6N/Qf8A5UqVge74Lh1u1m7qylvOZbKoGY9Wjc0batQNTNA2eMWXnLcUwYMHn0qX6apOUGTEx0pUyRLibhjw71V8P4KwYPfvveYHMuYKqIcpXwKo6E7k70ZiMclsSxA8zQadqMMRPerHlr8BvRQFz3dC4q0nTXr0rh4gsSSBPXf4VwYhTuRFFALCW42GnXmaJu31RSzMFUbkkAD1Jqm4z2ks4ZC7SeSqN2PJR/egryftL2juX3m6Szf+nZU+FOg826nf8KjKVcGnBpnl5fCXk9RxnbXBqY7wv/IpI9x2oG72xwzqQHa2xBgshKg8iQDqPhXmOB4NxHEsFti1bzTGdoiBqTlDEUXe/wAPuLrqLthvIXW//q2B86j85c8elXFtnqnYxvqv8xLhzOSyCFJZ2baTG/OtDnmvnK3xbH8OuBrttresB1jK2sESso2o21r1zsf27tY1Aphb20cmPl0Pl8Jp3fZTkwUrg7X8mySuNdAoczXUw53J1qVGYe1wk6fGuBTTxbprkkELv1OwoA6QetdAodkuAaET1iayXai7ev4i1gkvZQ6s97LoQikcxr4tRGlOgNNjOOYe0Ja6gjzBPpA1qoudqGugjD4d3kCGY5V1I1J1I0kxv5VPwngOFtD6q2CAZlpYTzIzaT5ijr99LYBdgskKJIEkmAB50CM3fw/ELqMnepbVpG2d4PLNCjrrBNB4LshiLJLWL+QxHsiOvOa09jjmFl1F63mQkMCwBBG+h1qhbtThcY3dd7fsKWi24lBe5EgxokmBMTTADvcMt32Iu3mxt20wBtKQtpWPK5AiBzmSOnKgbn+Gq3cQ1/EXrYUkHurVvIoAgBSZ8QgamBPltW9W9YshLS5QToqr5eQ/Gsv2m7VLauBEXM6nURtInf0oAvLGAKiHcC2vsoBAAAAAJnbTbzoLifafC2QVzhmH2V1P/FZLE8QxGNYKUbKuuUEhSeRaN/TSrjhPY9R4r2UE7qo0HxmmIqOIdsbt0MtlGBYeGNW6TrAHrrVfwHgzXCTctM5GuXMAPIsZ1Pl616Rh+HW0EKq/Cpr1gZSI3pAZj6Uf9E/1J+tKrH9m+QpUwAbfAXtyFy58x2uACOWmX2qnPHThStpsr3X5KRA/mYmB/wAUHb7DuxzvdUloLZbMakan2+Z8o8hVp+6JUCGTTqkkiQY1Yjl0phRW8T+k3SLhyqqR4VbMXZtAo5T4h0G+9BHh2JYR3DoOQGWNOuTlqfhW4XgoY2i7k90ZVQFCzly66cgT03qz+jgUrHR5pY4ZftXCIy6CHbZjzExof0qTANduy3eEKObNAOmw5++t9xLD22Rs5hY1OaBHma8s7S3lIfuPDh0BAaR9YwEACRmKgmNNNN6LGlbSK+6z4i7FvxEsyWpJIUDV7kmTGhM9AKm4z2XFkWVssWxL5iRIPeQJLAnRVG2unvqbspbVV7xkZgltYyiQudiSW6DwjXlrRVjEPisUHtq9m3ZUhXKx3hcqSFkFSsLE671VBX8zN2rntaxR6Ra9nOF37UksVYgZj4Y9AF9+551pu8gQzT+Jqq7xjIzj3aEV0QsaknqTrVphDsebdxGVslxDKspghuRUjntXlXa7so3DwuMw+ZbZYC5bJnupMKQZ1QmBrqCRqeXpFoqCDppt5T0pcV7u9ZuWrnsOjK3oREjzG49Ki1ZPHkcHaBv8Ou24xSi1dabmysd2/hb+Loefrvve9FfKvA71yxdYqSGttDcjCkgtrqCCAeuvlX0JwDtNbu4cXLjKrDRxtJABkeoIPvqEXzTL88E16kevJoHdidwB8zUdnidqWUOsp7Qn2dJ1ny1qptXbl/xZyiHRAoE/zsWB9wGnrSsdm8MLjXXm5cOpNxs0egOg+FToyhGL4o11GXCFHubB2nukP8Ue0f4R74rOWMQOH4Z3xRm891/H4S11mMKR0GUDQ7AVp7mNtIcishb7oYZvhNNyKwkgNz1E00IzXCcRi+7UnG4eDvntSVnYEi4ASPQVD2gwdpbN0tee/ibi5FMjNLGFCquiJJAnpuTUvFLdi2l9M4QXdAqDYlYkAaSfdqRzOvnH7YvJiTcIuXVE21fNkUldAZUZCRJlTOp1oYjYfuZet2yQlq7cMKquR3dsAe00KM7ST5c61fZ/hdy2ga5BusB3jeggKvIKOQAjfrVNwe5xG5la73YOWQCrAb8/4q1N7AG6AGvXF6hCAD66T86AHtaVJaBmPxNUdrhTOzs9tFzsSxBzOwGiwSBl0A6/nV7g+FWrI8KyZnMxLNJ3MmpmFAwTA8ORBCqFA2A/vU+dFkAVyaYyedAHCRQ7yzabCpHpouAUCG/RzSrvfDrSpgW1giNKZiDoY35UCb/dqTccaSdBEc4iTTLN93GYDKDtO59Z2pUSHfSBaIzOSeQjU027jblwEIMvRmBifIAgn5VlOJH6RjEtC4oyAs2Utn0InaBsYGp3PSDor+ICaFo058gNyaYjPdp8K74jDI192BYg21GkRJuEDpoJO070N27wq4fh91bVm3bQ5BIPiJzr5a7bk0fZ4tbS898rlsG0B3pEd4yu0BZ8TCH068pqk/xK4izYOGAUNct5Rz+03i6HQaVGXTLcKvJH7lf2Z4q9u2e7y+NEMtyy5p/E1V/vhiSXUoLgVozRlG4G8/8AiqXs9ilJGHv5wpPhKsR/0mOXlWxPBLYUBbeeB4UmFA5QNvfrUMb4L9avn3e4Jw7HXjcnwwSSWDMR5AA/3pV3bxWUyzkk66/hVTd4ZfbQFbW0fbPnyWKmudnUK+Iu7feY8/ICAB7qtMZPf7TIGCqrOT90SB6naj7GMZiCVAXnrrPSstZ4ZesZoUOSSfaj0G1VOP7T37b5MiqRvrJ8vSlYWNOCW5xdrZ0W7cYEa/aTPyIOvrzrd9gbv0e9dwrn2SUE88uqH1KNPurzThnFJx1vEPpFwMT6KRW5TiqniCX02cITpGqnI2/8DCqb8/U6MVa2+8f5XJ6utuBp8TrFQjh8rldmfqWjWesAClaxqyBOu3p5etOxXFbdshTLMQSFXVoG5joJHxFXHOO4Thi29FAC/dG1Px2KS2ssYEgDQmSdgANTWbxHaTFXlJw+Ga2o1JvBhcI55EiC3QMwnTaaz3DXvY9h391mVPEqtby54YjOBETGhEmJ5UADcXxbs9xLYe29xiykIDcFuAFA1Bt5nBbXWKK7KcBFi4t11QgKw10ZWZlOikaeydtpq77P9mLeHutfZjmYRl0hROnKSdN6uGv2mfMQNNiwgn0B1imIKUFxMQPnUioRtQ37YtAHxr4TBg7Ecj5+Vds8VVyAobUTOUxHrET5b0DJ3znnFcX1rrXvKuWtTSARBpmapnAFAnEA+zDen/FMQQTQOMvqoJdgqjckwBVTxTi+Jz91btLaWYN66wymdgiqdSdRqRVL2kF/EW+4tkO4K95lEWwIneZ9wNAF1+3cH/ubP/cX9aVZ39zLH+3s/wBd2lQI3n0Q95miQBAJ1Y9fSn4jilpDkZyXIJyAEsfcKHu28TdA+sWwvPKoZz0Et4QPcabwrgtnC57klrj6vdcjM3wgAeQFBKxnC+HoGd7eHFlmPicquduepBn51T9p7uDwxzXiz3CB4FY6gE5c3RZJ0+Rp3aXtl3FotbRjMC2xBCMzLIidWAG8dImvJ7mLe47XXJdy0DN9pjux8h06AVXOe01abTeo7fRpON9p7l9lLZUA/wAtcuZ+koPan+LT3VUcSe+ULHOfO46/gAx+dEcPVU1iXO7H2j/x5UXiCHUjrVLlfZ1lhjBVFUUCEFJDABgD57ho9zDerC72neyneZTctyFGRyCpgls+4A000Eyfums5iuG3oyIR4WYMMyiNiCJOxDfKrXgFnwGzdVfFyDKZ9cp+e4pLjkpmty2pV5v6lvhP8QrDe33yAbzqPiuY/KrX998Jl0uAn/qLHpAj5ZZrC8U7LFDmtksnTmv6ip+BcNVTqNdx/f8Afzqy1RmWnm5UzWYjtIzEBUUIdSzkqfQKQPjNUOM4RbuksH8RJJIIMk9auRdplwId1B9QKr3M3LSYa5jZmk4EyOpzSAZ9k1ePiB4InMC0SI3Rj+KT7qccPa+4vwFAYnBkvb7oBWLoo6ElwFn3wPQmo2N6eCakl0esYHD3LikuynN/mIQPCY5eWxHrV1wrg9iyS6IO8IALnVyByzHWPKvE8Dxlb11bdrOszDKSIyoWAnb7MAHSr7B9p8ZYGUXO9T+IDvB5g7E+sVfHL/sc+ehbtwdno/H+0drCwHLFm9lVUsT5aCB7yBWc7L3LqWLoUAuzvdQboO8OcIGGmhJ22mucHuW8XF7M9zL9kgeAzqIga+Z9PKtPg7tsjKPAR9kwD8AauTMDTTpg+IxzIqgWne6w2EZV01LknQa8pPlSwfBWvfWXRlcqFJUnQcwpmQPhRr2mbS3G4zN0HOOpq1a+qDXSkIgwvCLNsCEUkcyAT6yanuOvlQSY1bslGkbSNvdUDXrgaMoyxqxO3upUFhzstB4u440SBpvEn3Dn7zUGI4gqozSfCCSTptvvVRwfjTXwWylAftkggiN1M1IAW7iwpi/fvXJOU22t2yJHI5FgbjnVmvEruT6jCEiNMzKg+B1+VFYLBWVkqBJMljqSTqSfM0RfvBRvQIwPGOBYvEktiboyggiwjHJE6y0RI6kGrbheCewTaVVVGPhgkmIGuwAp17tDaW41vR2kCBrE/ifIbVY3LbWka60M8aA7eQoEd/Yy/fuf1V2qP9uY3/St/E0qANWtq9l9tWPUiB8qAxHB8ReC97iYUalbdoKG9SxYx6RWiSwF21FcuXvKgkeTdvlS7ihaa6FSxZlmLGEZ3AGeAeQGwnxCsLhdMg6An3kx+C1Zf4gY43L9240SbvdggjxradxIG8CUHqOs1V4ZpI/kX86yzfLZ2NGqVFxauUZaaqu09GWrlQRtFjMLbZgzIrGYMidANviaZ9Dtowe2gUg6FdN9PzpNdkf31NRreMH0oFtQd9Iao7eLRWGe2G181O8mCpG/mDQ7Xq4tvOQu084mPOJFFjcVQXcvBmOQGCTlXcgbxoNYFR99SsYZlcDXaRoROg059YOp2Nd/Z78yBOXeftGOnKDNQ3oSmkJbwrl3EAiNvMbjWQR5ihrttlMHy68xPPXnTOlMn2SG/ctkMrI2oOqwwMzMrv8ACpGxE0Id6kdooGlRd9jOJmzjbf3LpyMP4vsH1/SvT0xOGxF1rZyNctmCpjMNPw1rw+257y2VMENoehgwfjW04bw1rSnvrdzvgzkX7bS7hgPaiSBMaNWnC+KOR8RilNP3PScY2RcokEjwhT/cCqO2gcFr2IIVdG1ypI3gtqR76w/H8Zaw9pTZa+cYzSGNx2cgEFgQSZWOURMaVBhcXisYzrim7sJbnu8uUORlOVp1A8pG499xzbPRf23hbQyWWDkawm3mSdutctcUvXmhAlteRPiYjmY2Hzrz7C4y1iL15XICKRkMTAYAxqseW3Kt72a4haZctpblwLp3mUBfQExNAEXFeDvcnNcFxTEo6jLpqNBE69ZobjFhXsXALhBUEgAgQRsNPMVoMQ1xtAoQTqTq0eQGk++qbifZXD3VYm2Xub5ixzExpJJiPwoAwnCrl5i7NdcMzeKDlKmBmUzvA6dK1eAsX2TKrs1s6SYLNyOpPzq3wHZyxbtKjKCcoDHn561HxF8Lw+w9wQIUkAsSzkDRRJkk0ABY/A4bDWxFkPdUeBVMd3zzZiQEGkk8/M07sjfuYnCpcxBBaWEbCASAY9BNY/gfBr2OVjcfEWrcIXDH/NYkuTHJZiB0ia1lrs0yBQt51tDQoSfEOsggg/LyoQi3m394fEV2qP8AdPDfd/v4UqYGivdorgYKmDxDSJzfUqo8jmuTPpVJxvGYw23a6oVZUWlsMxu+I6m5AjQTsSCfhWovxVdjr2lRaJJ0eAY9YusPSQwEjSYMzqCT75p9poI/lH4tRfatAMXej7wPxVT+dBg+wfJh8G/5rLJUdrTvgNV6ntXaHQU8rVZrJzcI5EjyiRz2JGkzrPuppvdAfeIHvn9KO4DgmuOSAGCAkqY8XhaBqDvEf3NWPHcKrqb6GBMFYIJ19vrrM6k8tejI3Too1aplahiaQNIsDBcrneUKGp2agAjNTLvluNfXyqOaazUwHd8Oh9IM/hHzoe9cq64JhFaXcBh7IWSDJ0DTtvpz35aVVYjClXZW3BgikJexDg2Ju2408Q848SifnXrzcWRRcEgugErzJI8I06nSvJcLZ+utqDlJKgEbrLoJE8xvXo9rsaC1t2vXGZDmJLauerEflFaMPTOX8S7iFcGv3EQ3sRaRHOrkGSPaCqgAJgCBH8RPWstxO8neXDduGzbuDvcxD52nMAttdwYUdCRuOm5xGICMLcMbjAsFUToIEnkNSBqa867d4e6L1trqRbPtKMzZVDScxiASCR5Vezll12Own0m497u/qGKosqo0tqAsjfrI6mvSEcAQBFVfC1tpaUWwEQDQAAUYhJ1pDJiZ1pAkjTSm25Op2/GpC1AERtASTrXn3GeHs+LL3gDaulbdkH29AzMVH3dNz5VuMeyDxXHyqORML768o7R8SXEY+22HUZbJgNrluElZBGnhER5yaBM9L4LhmsotsLKjSSdffNDdpOMLhlNxzP3UHtMeQA/Os/iuG41wLov3rdwT7NxRbURpClT4d9WJIrG4xsXduGbn0iN7mVZ6ECPs6TsKdiN1++S/6Nz+n/mlWB+hYn7t35V2iwPVrPH7d1SyNI9DQHEOIkqQqmfPQfrQ9to0VPCOYgD3frVD2j461nwqgZzyLa+sDWN6BmL7Rz9JuSZMif6FodfZT+Zh8gfyp+IuF3Z23Jk10jRf5ifkBWSTtnc08aivsEWmoi04kZgSOYBgn3xQ6CpUE6DUnYDc1A1l4uFfIX7wIMkqttcwIYEEHmNyJ1iTruKbw/DuLbXLlx8mV2yCYOgBzToCxgbTt0qfsliUNwW3Jy6spG6nQN5QVBEVf4zHorXC4TuQpVApJZ5kM5kCDBgLrvTMTjk3U/L8exgXuljJifIAD4DSkDRuL4YyC0QCTdLZUg5hGQgeZIcVAvD7pzQjeGJ02mIHrrt69Kia4yTVohLVzPUc0qCVkmeurdqTC4F7iuygQgk6j+//AB6UXh+DN3gt3ZTMpIPQmAOXIsJFApTUVb8Fj+zXv27d21nLCC6iNgzAuvQ84iPFpzFVvEyqkKr5xurH2gDqFJGjaQduemhrS4Pjlm1bKoCjhGt3be4lcwkGJ8Pi1HIkGsViQScxOrakTJE6iafBVjjLe34JcC319s+a/wDvSvUrmGcvmR2Unqxj4V5NhjFxfX9D+VekX+PDD2s93xMSQqjcnp5eZq7C6Tsx/EIuU4pdsvcPntCT42qg7b8WujDlSiA3DlynUlftctNIE+dZvGdr8Rd9ki2vRd/eT+UVV4q61wyzux6lifzqfrRKofDsj/U0j0HgWGJs2ncG54BCk+FdBoAdz5nWr7CcVDzlWQDGbkY6V4/ZLDZ3B8mb9as8PxjEIuVLxAAgAqpC+mk/Oj1UOXw+a6dnonG+PLZABbxt7KgZnaN4H5mqK1x3GnayWPIwI9WI0+FZ7hXGUwwLNhhcuEz3uckmTqWzbe7T0ojE9vnDpNuBPiAK6jlEz5c6mpJmPJinjdSQT2vYoguYm49y5tbsICLZaOfNo3391Zjgdm/atNey2tLgl3JDLtoQRIkkekzyrUcYw9xrLY66Ee4qTbSYVFOszBYvryI2jSqOxw7EXb6W7rqxyBmtkErrtng+Jlnczy3pspNDgyl4A3S2IutOS3JFlF0ktA9DJk9OdB3+IuyDD8PRHYSLl1Fi3bn7KDUk67mau7fZZH1vOXUbIFCoPLTUj1MVX9sceMMtrC4ZxZuXmAzCAEUbknl0660MZmv2JxD/AF73/wC/60qt/wB2MP8A7u//AN2lSAue+bQXCFBBIA5AQILE768hQ37OsqSVUSdSdyfUmiMeihMzDMyj+/Ksfje0/gYroRsTt7/OpAU/aFMuIuAbSPmqn86gUez6MfmP0pl/Ed6e8O7b+7T8qlt7j+UfiTWSXZ3NNzFEopelImicBizbaQxAMBssSR5Tz3ioGmT44D7GGuW7iviEYKpykiMxJgAGDJGoE+7yo7hnAmugXGbwISGzkjLtGhEgSeZ10Om1K3cVkuXWF0Hwm1mLMBl1XeQ3snVgYzc5kWGCvXYK2jnssCXzg5iSAGDAiCNBp56aUcGaEp27q2v+DOI4E3BbvWLivluMoWDDEmbhUk6iVifLQyKEx2OPhZLnjuKFcASdNfCNDJykQREkzEzRvBvpN68yOCgRcpUACCQYKkgwQNRpFNvYKyrXL63V7xINzL7IzSCIA9ogExvz0nV0Lc8fy8dcGOcCTAI8iZI9dBTYorHYpXIyoFAnXXM3m2v99TQweDpy12B+R0NKjVFtq2qLXhl7u1DtnW2Wyvl1W4PaIIJkHQCBoQdYjxX3DOH52bETmyD6tC2UkL9mTG6kQTtIBofgrLiUebctb8TIuUC5yBGbQPAI1aNdIonjFi3e+j21zW7hZp2LwQZEqSNgOZ38ooM+6UpbXx/X3Fxghrga0ClwoSZhnDFVVVzAwpidfZPwrP8AEsFbtqCodZJCqwGuViGJIOkeERH61psXhbdu1cIZkuoy95KEFiuqjMQfDKhsyyddY1nIY+4r3GcCAepJnlOv4chAoJYvmnabr8gd14II5H8QR+dSdo8e12/qdEGUfi3z/CocYAFnpBoPNOp3Oppp8Fk43NP2DLdypUv8qEVqJ+kgsCwmJnzn1qLJuT8BT3QCR05xHypy3qhW5bO4IOvxJBGx2GvLalcCiMpn+xHIQd9NaSYKXuFpeio8VaUjaR05jnK9D+P4jhqlVqsTFKEZqmXfarijXcPh7OHDsjwHhTsgGkjTlqOk0Zwm8ljF3Hy+A21OgAggAEaGJ051R8Fa8bgS1duJqSFUnJ4tyw23EbdKv/2S9nNcdVnWWbxE6AT4mgbVpi7Vnn8+P05uJd4ftXZukKguF4HhyMYnqQCB6zFU9zCXXxFvFYhbauDks2R7ThpBzHWCJn3cqL4Nw64We5bBtJcy6kamARIB2G29aK3aRDmYjNEAnfz/AAqZSQ/RX+5b+P8AxSpv7w4T/cWv6x+tdp2BleK8Mx14QVRQd4YQPhqfiKBw/Y5xOdAw2Mspn1mvYTwNT9o/KmHgNv77fIflUSVHgfaLhf0e5kyhVKhhERuQdvMfOgV3PuHwAr1X/EvgdsWmg5mRO8U8xr4hpyIU++K8mVtT61nyLk62jneOvYnmlNRE00vVdGvcWnD+IlCoOqhgRM+GDJKwflsa02M7Q2myMLroi721iLhUkgv4cwG2kwY8zODN2ud7QVuON3x2aK52oui811CwDRKliQSBAPlQ+N45curlaAOg6zM1Ri5TWxAHQUUCyLthveUg9VpxQ60xsT6/A09rG9RFFzbxRX2WI9CRPPWmjGOGzB2DDUEEyD1B5VWWhcb2bbn0GlW9nhSrbW5fuqufLlRXAcAz4mlWEQNAJmdxzTSXYnlvwT4rjF26PrHLfn8KE72icRg0tNlN60AQDLo5Y7zGRHywQQdZkGeRqLE4W3r3dxWj7uYwJiSrKrjrz8ppKicMt8IrsddJEdaahq0wXArl3VSrec6DT00oDH4F7TQQTHMAxVmx0ZXqo72nwND10PQgujrTw9LaWrNYYlyp0eq4PU9u5SotjkssFapM1CWnqc0i1clz2LxBXFkKMxa0wA01IYMBrpsDW5w9i4SLl20WcbAMmVPSTv8Axb+m1ZDsHwp2xAv7KBofQmf099enitGLo4etd5WVGPxWJy/UWELf/kcAD+kGayHFuz/EMSwa5l/iU37mTaMoCqIG+oM16SgrrLVlGU8q/c/Ff7fB/wDdu/pSr1LLXadBZewZ12qaE8q4GHOK5KdRUSRmO1eHzXJGoygfjXjvaDgJssWWQnLnA6Ecx57+te6cXKs2mugn51jeLYRLlyCJVdPU86bimiePLLG7ieQBSTAIPoHn4ZaJtcHvvtbb+kj/AN2WvUrWDRdAoA8hH4UrmRd4/P3VD0kXPWSfg85t9lMSdwB6so/DNRCdi7x3dR72P4AVtXxO+RGJ8wQPnTLouEe0E6wPzNP00QepmY8dh353F/pP5k1Lb7EAb3D7gP0rQpw9mAGYsObGflPOpl4LyDlVHJRBPqSZJp7EVvLN+TPv2UsqCZJMc2P61Q4XEouyZfQCfida9CvcHzCMzR571RN2K10c++oThfRq0upUG9xXnjBIgm4w5KSMo9BsKGficOXCKGJnMInoNgI25Vd2+x5Ohuge7X5mn4nsbbS27m67EKSIIGsabAc6r9Jmt67GuvwZ9uLErBUHX4zJ5z9351G+PBEZY9Iqyt9lC3doM0HVrkkkmNYG0DYe/wAqvML2Hsrqzs3y/OmsTK1r0iDstZ+qZ+pj4bn1JJo+5hVberOxg0sW8iA5RJ2oZ8TGuRvLYT8TV8Y0qOdlyPJNyfkoMd2YtXN1Hu0rP4vse6623MdDW5Yd6YZGXoZH5UQ68iD6xQ4orTa6PKcTwrEW90kdRQRxEe0CPUV6viRAMIX6efxobF8PtlZNosTygTUXjRas+ReTzezjByIo+7fJGkx9poOVB1YgQB5nStWOydltckeVH4Pgy2iGTQjaKh6RojrppVQ/se96VClQqrlAY6azr4R4tuRjXfetY30ldc9k+WRx7pzH8KpML2bw10q6h7TlyG7l2RT4HbNlBygyBqBrRzcDvW1M4u+6a7C2XUadU8XPbXoDSScUQlKE3f5LnhuOFwHSGU5WEzBgHfmIIPvoxqr+DcPS1b+qJYMc5cmS5IHiJ9IqwUVcrrkzzq+OjmWuVLFKpECzkU0xTVpwFRJFbj76rmPQflpWUIMdT5Vd9o3IkLuSPwB/SqK0raZjJ8hApiHWrULHiPqZPxphw6zJUSOZ1Iqa5bYjQwfPaq7EtdtCS2eTG0R86ALKyEJGZgJ0E8z0HnS4i6I6AtAbw5YkzOhEVVmPaYeMEMjEZguwB08z15UQpfISX5HXQE+sbCqpS5NGLHdodbwjl37srCwACTJMTrT7uKFuA41EByPZQnafImguE8NWxmxDFgIMIJljMadamXBrqI9vfnJPWZ57T5UoyfgeSEek7+pY5xE01LZBJzE9BpA/OmYXD5BAk9SY9OQA5cq5cvsHC92xWJz6R6VcZiC6l0tvAPSNKZawpzsGMhwQJ5RrRjX43EDqagGLtlwc48IIj1jU/CgdjbSvaQKBMabjTlPmKLsiTnUiDv8Al/4puHxy3DAG2o090/OixA6ChAxl2cpgCY0naobTSPkfXmKJYrGpGvzoC6+RvAJ+8PzHn5UxBHdjYAVC15QwQ+0RIEH8dqdYxatzgxMHQge+pDiEmJEx/c0AMZBUVtDzABqO/eQnw3AG6jX3RXPpw2Cux6hdPnSAY2BJuBi5AGyqSAf5utOxiNlOVgvnE0NcxV0k5UVY5tJPwX9ahzX4IZySZ1CAAHyk0wK3EcduWr1tVsNeDE6aqAdACCSB13jnWntcSvkAjCA6bG5bPu9uq3szgczF7oLGMsvGvoPUVpxaAMIPXoKVBZWXON4xcoGHXWNAZgeu1SftfHafUIB/PtVoFHMz/flTXzaQB7/yFMQB9OxnS38D/wDKuVY60qANHXY866WpjvFRJGU46WN5vF0AEfwihqi4y15rj5Mo8W51gaCaFwuGeIuOX89vwpiJ8TikQEu4A9arsZdzjwspQ8nUnXqPdNWAwlsH/LHrA/8ANTHKgJC7cqAKuxhb97wMyhBBkLGYTqrAnXTnpB61Lj7WdSitcGUGUXKC48iQTt0qa9isoJE5iN+kdPjXeE32KqSJg+FpBkcwfOqG/mLFJJbUT2bAKIAGgQ0MSWnzJPWiY1zZRPWnFtZiK4G8quSRXuZHdueYFOUTzqRqbFSA4yVG+FVgQQNfKm4nFBAJnXSq7EYh84KtpMAGRr013oAJUJZcS2raAcwJ1PpQ1zHp3hRJYEyZPhHWPKa44NzdiYnRAdD69aWH4QxhsrejFR+E0UO7Fbsq1xZBbKTrqANNlHTzqy+kINBz00pi8NaZBAnl/YrjcMcTFzL6a/GgQ+/h0YZWWQdKExdqzbHiygdD+u9dvYS+IFvMx6n2R5yaf+w7rr9Y6knlyHwFAA+DAIhVhRsQymi0woAIzE+c6ign7M3ZEXBHOAZ900eOCHIArODudQD6GBQAM1u2gguf+pqBvXwuog9AF39KsbnZYuwJuZY+6AT8W/SrKzwG0o1lv5j+kUCAez2GuXgzXBkURABIJ56kf3rWhSwAP1/5ptvwDKoAFdN00AOJApCKjmkaQEkilQ80qANDTb+1KlSJGPxftt6mmilSpkTpoC1ufWuUqBncT7Pu/Ou8F2+P5UqVZ1+r9yz/AB/YtDTRSpVpKh1NalSoArcP/nP6D86Gxv8Amr7/AMKVKgZb8K9kf3yqwNKlQCIudOte1SpUDDTTaVKgRyu9KVKkB2nClSoAYaaaVKgBhpUqVAjlKlSoGf/Z"
            }
          />
        </div>
        <div className="flex justify-between">
          <Cards
            imgUrl={
              "data:image/jpeg;base64,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"
            }
          />
          <Cards
            imgUrl={
              "data:image/jpeg;base64,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"
            }
          />
          <Cards
            imgUrl={
              "data:image/jpeg;base64,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"
            }
          />
        </div>
        <div className="Next bg-gray-200 mt-5 w-full rounded-sm flex justify-center items-center">
          <div className=" m-2 p-2 h-9 w-9 hover:bg-blue-400  hover:text-white text-center ">
            1
          </div>
          <h1 className=" m-2 p-2 h-9 w-9 bg-blue-400 text-amber-50 hover:bg-blue-400  hover:text-white text-center ">
            2
          </h1>
          <div className=" m-2 p-2 h-9 w-9 hover:bg-blue-400  hover:text-white text-center ">
            3
          </div>
          <div className=" m-2 p-2 h-9 w-9 hover:bg-blue-400  hover:text-white text-center ">
            4
          </div>
          <div className=" m-2 p-2 h-9 w-9 hover:bg-blue-400  hover:text-white text-center ">
            5
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
