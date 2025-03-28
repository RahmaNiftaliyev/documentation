import generic from "../data/generic"
import tableStyles from "../styles/table.module.css"
import typographyStyles from "../styles/typography.module.css"
import Link from "next/link"
import { FormStateApi } from "./FormStateApi"

const UseControllerMethods = ({
  isController = false,
}: {
  isController: boolean
}) => {
  return (
    <>
      <h2 className={typographyStyles.subTitle}>Return</h2>
      <p>
        The following table contains information about properties which{" "}
        <code>{isController ? "Controller" : "useController"}</code> produces.
      </p>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>Object Name</th>
            <th>{generic.name}</th>
            <th>{generic.type}</th>
            <th>{generic.description}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>onChange</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>
                {"(value: any) => void"}
              </code>
            </td>
            <td>
              <p>A function which sends the input's value to the library.</p>
              <ul>
                <li>
                  It should be assigned to the <code>onChange</code> prop of the
                  input and value should{" "}
                  <b>
                    not be <code>undefined</code>
                  </b>
                  .
                </li>
                <li>
                  <p>
                    This prop update{" "}
                    <Link
                      href="/docs/useform/formstate"
                      aria-label="read more about formstate"
                    >
                      formState
                    </Link>{" "}
                    and you should avoid manually invoke{" "}
                    <Link
                      href="/docs/useform/setvalue"
                      aria-label="read more about setValue"
                    >
                      setValue
                    </Link>{" "}
                    or other API related to field update.
                  </p>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>onBlur</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>{"() => void"}</code>
            </td>
            <td>
              <p>
                A function which sends the input's onBlur event to the library.
                It should be assigned to the input's <code>onBlur</code> prop.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>value</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>unknown</code>
            </td>
            <td>
              <p>The current value of the controlled component.</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>disabled</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>The disabled state of the input.</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>name</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>string</code>
            </td>
            <td>
              <p>Input's name being registered.</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>ref</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>React.Ref</code>
            </td>
            <td>
              <p>
                A ref used to connect hook form to the input. Assign{" "}
                <code>ref</code> to component's input ref to allow hook form to
                focus the error input.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <code>fieldState</code>
            </td>
            <td>
              <code>invalid</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>Invalid state for current input.</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>fieldState</code>
            </td>
            <td>
              <code>isTouched</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>Touched state for current controlled input.</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>fieldState</code>
            </td>
            <td>
              <code>isDirty</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>Dirty state for current controlled input.</p>
            </td>
          </tr>
          <tr>
            <td>
              <code>fieldState</code>
            </td>
            <td>
              <code>error</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>object</code>
            </td>
            <td>
              <p>error for this specific input.</p>
            </td>
          </tr>
          <FormStateApi columnIndent />
        </tbody>
      </table>
    </>
  )
}

export default UseControllerMethods
