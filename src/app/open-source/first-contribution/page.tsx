export default function FirstContributionPage() {
  return (
    <div className="prose prose-invert min-h-[300px] max-w-[100%]  p-2 px-4 py-8">
      <div className="my-2  text-left">
        <h1>First Contribution</h1>

        <p>
          Hello, soldier! Welcome to the first contribution page. Here, you will
          learn how to contribute to open-source projects. This page will guide
          you through the process of making your first contribution to an
          open-source project on GitHub.
        </p>

        <h2>What is open source and why do I need to care about it?</h2>
        <p>
          Big question, right? to get more context start by watching this video:
        </p>
        <iframe
          className="mx-auto my-2"
          width="838"
          height="472"
          src="https://www.youtube.com/embed/A6mR8LdPLdQ"
          title="#55 - Hacktoberfest &amp; Open source"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <h2>Before you start make sure:</h2>

        <ul>
          <li>
            You have a Github account. if not, you can create one{" "}
            <a target="_tab" href="https://github.com">
              here
            </a>
            .
          </li>
          <li>
            You have a Git client installed on your computer. more details{" "}
            <a target="_tab" href="https://git-scm.com/downloads">
              here
            </a>
            .
          </li>

          <li>
            You have a code editor installed on your computer. more details{" "}
            <a
              className="font-bold"
              href="https://code.visualstudio.com/download"
            >
              here
            </a>
            .
          </li>

          <li>You have a basic understanding of HTML, CSS and JavaScript.</li>
        </ul>

        <h2>Ready? let&apos;s go:</h2>

        <ol className="list-inside list-decimal">
          <li className="my-2">
            Browse to this repository{" "}
            <a
              className="font-bold"
              target="_tab"
              href="https://github.com/geeksblabla/devc-casa-hacktoberfest"
            >
              devc-casa-hacktoberfest
            </a>
          </li>
          <li className="my-2">
            Fork this repository by clicking the Fork button at the top right
            corner of this page.
          </li>
          <li className="my-2">
            Clone your forked repository to your computer. You can do that by
            clicking on the green button that says Code and copy the URL.
          </li>
          <li className="my-2">
            Open your terminal and run the following command:
            <pre className="my-2 rounded-md bg-black p-2 text-green-400">
              git clone git@github.com:xxxx/devc-casa-hacktoberfest.git
            </pre>
            Replace xxxx with your Github username.
          </li>
          <li className="my-2">
            Open the project in your code editor and navigate to the open-source
            project folder.
            <pre className="my-2 rounded-md bg-black p-2 text-green-400">
              cd devc-casa-hacktoberfest code .
            </pre>
          </li>
          <li className="my-2">
            Create branch with your firstName and lastName, ex:{" "}
            <i className="">firstName_lastName</i> . Never use the master branch
            to create PR.
            <pre className="my-2 rounded-md bg-black p-2 text-green-400">
              git checkout -b firstName_lastName
            </pre>
          </li>

          <li className="my-2">
            Add your file firstName_lastName.yml (ex:firstName_lastName.yml) in
            the contributors/ directory in that branch.
            <pre className="my-2 rounded-md bg-black p-2 text-green-400">
              touch firstName_lastName.yml
            </pre>
          </li>

          <li className="my-2">
            Edit the file and add your informations.
            <pre className="my-2 rounded-md bg-black p-2 text-green-400">
              firstName: your_firstname <br />
              lastName: your_lastname <br />
              bio: Full-stack web developer at XXX
              <br />
              github: your_github_username
            </pre>
          </li>

          <li className="my-2">
            Commit your changes.
            <pre className="my-2 rounded-md bg-black p-2 text-green-400">
              git add . git commit -m add firstName_lastName.yml
            </pre>
          </li>

          <li className="my-2">
            Push your changes to Github.
            <pre className="my-2 rounded-md bg-black p-2 text-green-400">
              git push origin firstName_lastName
            </pre>
          </li>

          <li className="my-2">
            Go back to Github and open a Pull Request. You can do that by going
            to your forked repository and click on the button that says Pull
            Request. more details{" "}
            <a
              className="font-bold"
              target="_tab"
              href="https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork"
            >
              here
            </a>
            .
          </li>

          <li className="my-2">
            Wait for your Pull Request to be reviewed and merged.
          </li>

          <li className="my-2">
            Congratulations! You have made your first contribution to an open
            source project. your profile will be added to the contributors list.
          </li>
        </ol>
      </div>
    </div>
  );
}
