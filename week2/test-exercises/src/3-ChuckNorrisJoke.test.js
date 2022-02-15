import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import ChuckNorrisJoke from "./3-ChuckNorrisJoke";

/**
 * ChuckNorrisJoke is a component that fetches a joke from an api and displays it on the screen.
 * It is a simple component that we can use to practice API testing! Let's look at how the user sees the component:
 *
 * - When starting, the user should see a Loading... text
 * - Once the joke has been fetched it should be shown on the screen
 * - If there is an error, an error message needs to be showen to the user
 *
 * You don't want your component to really connect to the API when unit testing so you will want to mock that.
 * To make this easier, a package called `jest-fetch-mock` can be useful, you will have to set that up yourself.
 * Have a look at: https://github.com/jefflau/jest-fetch-mock
 */
const joke = "Chuck Norris's log statements are always at the FATAL level.";
const testSuccessfullResponse = JSON.stringify({
  type: "success",
  value: {
    id: 538,
    joke: joke,
    categories: ["nerdy"],
  },
});

const server = setupServer(
  rest.get("http://api.icndb.com/jokes/random", (req, res, ctx) => {
    return res(ctx.json(JSON.parse(testSuccessfullResponse)));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ChuckNorrisJoke", () => {
  test("Should show the Loading text when the component is still loading", async () => {
    render(<ChuckNorrisJoke />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("Should show the joke the fetch returns", async () => {
    render(<ChuckNorrisJoke />);
    await waitFor(() => {
      expect(screen.getByText(joke)).toBeInTheDocument();
    });
  });

  test("Should show an error message if the fetch fails", async () => {
    server.use(
      rest.get("http://api.icndb.com/jokes/random", (req, res, ctx) => {
        return res(ctx.throw(500, "Internal Server Error"));
      })
    );
    render(<ChuckNorrisJoke />);
    await waitFor(() => {
      expect(
        screen.getByText(
          "Something went wrong with grabbing your joke. Please try again later."
        )
      ).toBeInTheDocument();
    });
  });
});
