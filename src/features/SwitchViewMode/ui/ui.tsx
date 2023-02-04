import styled from "styled-components"
import { useAppDispatch, useTypedSelector } from "../../../shared/Hooks/store-hooks"
import { setIsSwitching, setViewMode, viewMode } from "../model/ViewModeSlice"

export const SwitchViewMode = () => {
  const dispatch = useAppDispatch()

  const viewMode = useTypedSelector(state => state.ViewMode.viewMode)


  const SetViewMode = (mode: viewMode) => {
    dispatch(setIsSwitching(true))
    setTimeout(() => {
      dispatch(setViewMode(mode))
    }, 700)
    setTimeout(() => {
      dispatch(setIsSwitching(false))

    }, 1000)
  }

  return <SwitchViewLayout>
    <button onClick={() => SetViewMode("overview")} className={viewMode === "overview" ? "active" : ""}>
      <span>01</span>overview
    </button>
    <button onClick={() => SetViewMode("structure")} className={viewMode === "structure" ? "active" : ""}>
      <span>02</span>internal
      structure
    </button>
    <button onClick={() => SetViewMode("surface")} className={viewMode === "surface" ? "active" : ""}>
      <span>03</span>surface
      geology
    </button>
  </SwitchViewLayout>
}
const SwitchViewLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  .active {
    background-color: hsl(263, 67%, 51%);
  }

  @media (max-width: 650px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    border-top: 1px solid rgb(55, 55, 78);
    border-bottom: 1px solid rgb(55, 55, 78);
    flex-direction: initial;
    justify-content: space-evenly;
    align-items: center;
    .active {
      background-color: transparent;
      color: white;

      &::after {
        transform: scaleX(1);

      }
    }
  }


  button {
    transition: .3s;
    padding-left: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid rgb(55, 55, 78);
    width: 100%;
    flex: 0 0 48px;
    text-transform: uppercase;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    letter-spacing: 1px;
    color: white;
    font-weight: 600;


    &:hover {
      background-color: hsl(240, 17%, 26%) !important;
    }

    @media (max-width: 650px) {
      border: none;
      padding: 20px 5px;
      font-size: 10px;
      color: hsl(240, 6%, 54%);
      position: relative;
      height: 50px;
      &:hover {
        background-color: transparent !important;
      }

      &::after {
        transition: .5s;
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 0;
        height: 4px;
        background-color: hsl(263, 67%, 51%);
        transform: scaleX(0);
      }

      span {
        display: none;
      }
    }

    span {
      font-family: Roboto, sans-serif;
      color: rgba(255, 255, 255, 0.5);
    }
  }

`
