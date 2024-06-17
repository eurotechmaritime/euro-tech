import React from "react";
import PageBanner from "../Components/PageBanner";
import { blogData } from "../locale/blogData";
import { Helmet } from "react-helmet-async";
import { routes } from "../constants/routes";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>
          Navigating Seas of Knowledge: Challenges and Opportunities for
          Maritime Academics
        </title>
        <meta
          name="description"
          content="Explore the dynamic waters of maritime academia, delving into the challenges faced and the promising opportunities that lie on the horizon for educators and researchers in the maritime industry."
          data-rh="true"
        />
        <link
          rel="canonical"
          href={"https://eurotechmaritime.org" + routes.BLOG}
        />
      </Helmet>
      <PageBanner imgUrl="/assets/Governing-board-banner.png" title="Blog" />
      <div className="mx-5 md:mx-32 lg:mx-60">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl py-8">
            NAVIGATING THROUGH THE SEAS OF GLOBALIZATION: Challenges and
            opportunities for Maritime academics
          </h1>
          <p className="text-xl pb-20">
            The maritime academy is a vital part of global trade and commerce,
            and pursuing a career in this field can make a meaningful impact on
            the world while also providing a fulfilling career. With the diverse
            range of career opportunities available, the maritime academy offers
            good career opportunities for everyone. There are several pathways
            to grab the opportunities for maritime industry, each with its own
            unique benefits and requirements. These programs provide hands-on
            experience and can lead to entry-level positions within the
            industry. Graduates of these programs often go on to work on
            commercial ships, as well as in port management and other related
            fields.
          </p>
          <h2 className="font-bold pb-4 text-2xl">
            Sailing with Challenges: Challenges in Maritime academy
          </h2>
          <p className="text-xl pb-8">
            Maritime academies has its own set of challenges. Here are some of
            the challenges that the maritime education sector faces:
          </p>
          <dl>
            {blogData.challenges.map((item) => {
              return (
                <>
                  <dt className="text-lg font-bold pb-4">{item.title}</dt>
                  <dd className="text-lg pb-8">{item.description}</dd>
                </>
              );
            })}
          </dl>
          <h2 className="font-bold pt-8 text-2xl">
            Challenging skills needed in maritime academies
          </h2>
          <ul className="py-8 list-disc">
            {blogData.skills.map((item) => {
              return <li className="text-xl pb-6">{item}</li>;
            })}
          </ul>
          <p className="text-xl py-8">
            To address these challenges, the marine academies must take a
            proactive approach to attracting and retaining skilled personnel.
            The marine academies should promote STEM subjects and engineering
            careers, offering more attractive compensation packages to attract
            and retain skilled workers. Additionally, companies could consider
            offering mentorship and apprenticeship programs to help bridge the
            skills gap and pass on knowledge and expertise from experienced
            engineers to younger workers. By taking these steps, the marine
            academies can help address the growing skills gap and ensure it has
            a skilled and capable workforce to meet its future needs.
          </p>
          <h2 className="font-bold pt-8 text-2xl">
            Technological advancements; a challenge for Maritime academy
          </h2>
          <p className="text-xl py-8">
            Technology is constantly evolving in the maritime industry, and it
            can be challenging for educational institutions to keep up with the
            latest advancements. This can make it difficult for students to
            learn about the latest technologies and how they are used in the
            industry.As the shipping industry continues to embrace technological
            advancements, professionals are anticipating an expansion of
            autonomous shipping, increased digitisation, and more artificial
            intelligence systems. However, many are also facing challenges in
            keeping up with the pace of change, troubleshooting and resolving
            issues with new technology onboard ships, and assessing the safety
            impact of emerging technology.
          </p>
          <p className="text-xl pb-8">
            Some professionals are concerned about the decline of the marine
            engineer as advanced technology becomes more prevalent and the
            hastened obsolescence of older systems. While technology offers
            opportunities for improving margins and efficiency in shipping, the
            lack of training provided by owners and colleges can create a
            challenge for seafaring engineers who must pay for their own
            training.
          </p>
          <p className="text-xl pb-8">
            The shipping industry must take a proactive approach to addressing
            these challenges and ensuring that professionals have the knowledge
            and resources necessary to navigate the rapidly evolving
            technological landscape. By doing so, the industry can continue to
            leverage technology to improve operations and meet the demands of a
            constantly changing global market
          </p>
          <h2 className="font-bold pt-8 text-2xl">
            All aboard: Opportunities for maritime academies
          </h2>
          <p className="text-xl py-8">
            The sea offers wide range of opportunities for maritime academies
            for individuals who are interested in pursuing a good career. Here
            are some of the opportunities that maritime academies can provide:
          </p>
          <dl>
            {blogData.opportunities.map((item) => {
              return (
                <>
                  <dt className="text-xl font-bold pb-4">{item.title}</dt>
                  <dd className="text-xl pb-8">{item.description}</dd>
                </>
              );
            })}
          </dl>
          <p className="text-xl py-8">
            The maritime academies offer a diverse range of career opportunities
            and is a crucial part of global trade and commerce. By pursuing a
            career in this field, you can make a meaningful impact on the world
            while also enjoying a rewarding and fulfilling career. When choosing
            a program, it is important to consider your career goals and
            interests, as well as factors such as cost, location, and program
            reputation. Researching each option and choosing the right maritime
            academy can help you make an informed decision about which pathway
            is right for you.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
